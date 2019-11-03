import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let RocketPageComponent = class RocketPageComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.rocket = this.route.snapshot.data.rocket;
    }
};
tslib_1.__decorate([
    Input()
], RocketPageComponent.prototype, "rocket", void 0);
RocketPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-rocket-details',
        templateUrl: './rocket-page.component.html',
        styleUrls: ['./rocket-page.component.scss']
    })
], RocketPageComponent);
export { RocketPageComponent };
//# sourceMappingURL=rocket-page.component.js.map