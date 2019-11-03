import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let HomepageResolver = class HomepageResolver {
    constructor(spacexApiService) {
        this.spacexApiService = spacexApiService;
    }
    resolve(route, state) {
        const launchRequester = this.spacexApiService.getLaunchRequester();
        return launchRequester.fetchNext()
            .pipe(map(() => {
            return launchRequester;
        }));
    }
};
HomepageResolver = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], HomepageResolver);
export { HomepageResolver };
//# sourceMappingURL=launches-resolver.component.js.map