import { tap } from 'rxjs/operators';
export class SpacexLaunchResquester {
    constructor(service) {
        this.service = service;
        this.countByPage = 3;
    }
    fetchNext() {
        const newOffset = this.currentOffset == null ? 0 : this.currentOffset + this.countByPage;
        return this.service.getLaunches({ paginationOffset: newOffset, paginationLimit: this.countByPage })
            .pipe(tap((launches) => this.launches = launches), tap(() => this.currentOffset = newOffset), tap(() => console.log(this.currentOffset)));
    }
    fetchPrevious() {
        const newPaginationOffset = this.currentOffset - this.countByPage;
        return this.service.getLaunches({
            paginationOffset: newPaginationOffset,
            paginationLimit: this.countByPage
        }).pipe(tap((launches) => this.launches = launches), tap(() => this.currentOffset = newPaginationOffset));
    }
    getLaunchesRetrieved() {
        return this.launches;
    }
}
//# sourceMappingURL=spacex-launch-requester.js.map