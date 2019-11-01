import { Launch } from '../model/launch';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SpacexApiService } from './spacex-api.service';

export class SpacexLaunchResquester {
  private currentOffset: number;
  private launches: Array<Launch>;

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
        tap((launches) => this.launches = launches),
        tap(() => this.currentOffset = newOffset),
        tap(() => console.log(this.currentOffset))
      );
  }

  public fetchPrevious(): Observable<Array<Launch>> {
    const newPaginationOffset = this.currentOffset - this.countByPage;
    return this.service.getLaunches({
      paginationOffset: newPaginationOffset,
      paginationLimit: this.countByPage
    }).pipe(
      tap((launches) => this.launches = launches),
      tap(() => this.currentOffset = newPaginationOffset)
    );
  }

  getLaunchesRetrieved(): Array<Launch> {
    return this.launches;
  }
}
