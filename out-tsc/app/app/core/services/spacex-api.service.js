import * as tslib_1 from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SpacexApiBuilder } from './spacex-api-builder';
import { SpacexLaunchResquester } from './spacex-launch-requester';
let SpacexApiService = class SpacexApiService {
    constructor(http) {
        this.http = http;
        this.ROOT = 'https://api.spacexdata.com/v3/';
    }
    getLaunchRequester() {
        return new SpacexLaunchResquester(this);
    }
    getLaunches(options) {
        return this.http.get(this.ROOT + 'launches/past', { params: optionsToHttpParams(options) })
            .pipe(map((response) => SpacexApiBuilder.buildLaunches(response)));
    }
    getRocket(id) {
        return this.http.get(this.ROOT + 'rockets/' + id)
            .pipe(map((response) => SpacexApiBuilder.buildRocket(response)));
    }
};
SpacexApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
], SpacexApiService);
export { SpacexApiService };
function optionsToHttpParams(options) {
    return new HttpParams()
        .set('order', 'desc')
        .set('limit', String(options.paginationLimit))
        .set('offset', String(options.paginationOffset));
}
//# sourceMappingURL=spacex-api.service.js.map