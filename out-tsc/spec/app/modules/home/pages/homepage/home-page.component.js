import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LaunchFilter } from '../../../../core/components/launch-filter/pipes/launch-filter.pipe';
let HomePageComponent = class HomePageComponent {
    constructor(route) {
        this.route = route;
        this.launches = [];
        this.filter = new LaunchFilter();
    }
    ngOnInit() {
        this.launchRequester = this.route.snapshot.data.launchRequester;
        this.launches = this.launchRequester.getLastRetrieved();
    }
    updateFilter(filter) {
        this.filter = filter;
    }
    retrieveNext() {
        this.launchRequester.fetchNext()
            .subscribe(launches => this.launches = launches);
    }
    retrievePrevious() {
        this.launchRequester.fetchPrevious()
            .subscribe(launches => this.launches = launches);
    }
};
HomePageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-homepage',
        templateUrl: './home-page.component.html',
        styleUrls: ['./home-page.component.scss']
    })
], HomePageComponent);
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map
