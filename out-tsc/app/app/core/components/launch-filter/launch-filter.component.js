import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { LaunchFilter } from './pipes/launch-filter.pipe';
let LaunchFilterComponent = class LaunchFilterComponent {
    constructor() {
        this.onFilterChange = new EventEmitter();
        this.filter = new LaunchFilter();
    }
    ngOnInit() {
        this.formulaire.valueChanges.subscribe(() => {
            this.onFilterChange.emit(this.filter);
        });
    }
};
tslib_1.__decorate([
    ViewChild('formulaire', { static: true })
], LaunchFilterComponent.prototype, "formulaire", void 0);
tslib_1.__decorate([
    Output()
], LaunchFilterComponent.prototype, "onFilterChange", void 0);
LaunchFilterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-launch-filter',
        templateUrl: './launch-filter.component.html',
        styleUrls: ['./launch-filter.component.scss']
    })
], LaunchFilterComponent);
export { LaunchFilterComponent };
//# sourceMappingURL=launch-filter.component.js.map