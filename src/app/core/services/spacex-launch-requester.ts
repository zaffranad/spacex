import { Launch } from '../model/launch';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SpacexApiResponse, SpacexApiService } from './spacex-api.service';

export class SpacexLaunchResquester {
  private currentOffset: number;
  launches: Array<Launch>;
  total: number;
  currentPage: number;
  totalPageNumber: number;

  private readonly countByPage: number;

  constructor(
    private service: SpacexApiService
  ) {
    this.countByPage = 3;
  }

  public fetchNext(): Observable<Array<Launch>> {
    const newOffset = this.currentOffset == null ? 0 : this.currentOffset + this.countByPage;
    return this.service.getLaunches({paginationOffset: newOffset, paginationLimit: this.countByPage})
      .pipe(
        tap(this.storeTotal()),
        map(this.storeLaunches()),
        tap(this.storeNewOffset(newOffset)),
        tap(() => {
          this.totalPageNumber = Math.round(this.total / this.countByPage);
          this.currentPage = Math.round(this.totalPageNumber / (this.totalPageNumber - (this.currentOffset + 1)));
        })
      );
  }

  public fetchPrevious(): Observable<Array<Launch>> {
    const newOffset = this.currentOffset - this.countByPage;
    return this.service.getLaunches({
      paginationOffset: newOffset,
      paginationLimit: this.countByPage
    }).pipe(
      tap(this.storeTotal()),
      map(this.storeLaunches()),
      tap(this.storeNewOffset(newOffset))
    );
  }

  private storeTotal() {
    return (res) => this.total = res.total;
  }

  private storeNewOffset(newOffset) {
    return () => this.currentOffset = newOffset;
  }

  private storeLaunches() {
    return (res: SpacexApiResponse<Launch>) => this.launches = res.items;
  }

}
