import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/homepage/home-page.component';
import { RocketPageComponent } from './modules/home/pages/rocket-details/rocket-page.component';
import { RocketResolver } from './modules/home/resolvers/rocket-resolver/rocket-resolver.component';
import { HomepageResolver } from './modules/home/resolvers/homepage-resolver/launches-resolver.component';
const routes = [
    {
        path: '',
        component: HomePageComponent,
        resolve: {
            launchRequester: HomepageResolver
        }
    },
    {
        path: 'rocket/:id',
        component: RocketPageComponent,
        resolve: {
            rocket: RocketResolver
        }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        providers: [
            RocketResolver,
            HomepageResolver
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map