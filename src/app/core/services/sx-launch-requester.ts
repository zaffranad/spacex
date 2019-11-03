import { Launch } from '../model/launch';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SxApiService } from './sx-api.service';
import { SxApiResponse } from './sx-api-launch';

export class SxLaunchRequester {
  private currentOffset: number;
  private totalPageNumber: number;

  launches: Array<Launch>;
  total: number;
  currentPage: number;
  isFirstPage = false;
  isLastPage = false;
  pages: Array<number> = [];

  private readonly countByPage: number;

  constructor(
    private service: SxApiService
  ) {
    this.countByPage = 10;
  }

  public fetchNext(): Observable<Array<Launch>> {
    const newOffset = this.currentOffset == null ? 0 : this.currentOffset + this.countByPage;
    return this.getLaunches(newOffset);
  }

  public fetchPrevious(): Observable<Array<Launch>> {
    const newOffset = this.currentOffset - this.countByPage;
    return this.getLaunches(newOffset);
  }

  public fetchPage(pageNumber: number): Observable<Array<Launch>> {
    const newOffset = (pageNumber - 1) * this.countByPage;
    return this.getLaunches(newOffset);
  }

  private getLaunches(newOffset: number): Observable<Array<Launch>> {
    return this.service.getLaunches({paginationOffset: newOffset, paginationLimit: this.countByPage})
      .pipe(
        tap(this.storeTotal()),
        map(this.storeLaunches()),
        tap(this.computePaginationMetrics(newOffset))
      );
  }

  private computePaginationMetrics(newOffset: number) {
    return () => {
      this.currentOffset = newOffset;
      this.totalPageNumber = Math.ceil(this.total / this.countByPage);
      this.currentPage = Math.round(this.currentOffset / this.countByPage) + 1;
      this.pages = [];
      for (let i = 1; i <= this.totalPageNumber; i++) {
        this.pages.push(i);
      }
      this.isFirstPage = this.currentPage === 1;
      this.isLastPage = this.currentPage === this.totalPageNumber;
    };
  }

  private storeTotal() {
    return (res: SxApiResponse<Launch>) => this.total = res.total;
  }

  private storeLaunches() {
    return (res: SxApiResponse<Launch>) => this.launches = res.items;
  }

}
