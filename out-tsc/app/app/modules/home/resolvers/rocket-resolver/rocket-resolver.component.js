import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let RocketResolver = class RocketResolver {
    constructor(spacexApiService) {
        this.spacexApiService = spacexApiService;
    }
    resolve(route, state) {
        return this.spacexApiService.getRocket(route.paramMap.get('id'));
    }
};
RocketResolver = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], RocketResolver);
export { RocketResolver };
//# sourceMappingURL=rocket-resolver.component.js.map