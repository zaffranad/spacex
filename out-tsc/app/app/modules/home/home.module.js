import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homepage/home-page.component';
import { SpacexApiService } from 'src/app/core/services/spacex-api.service';
import { CoreModule } from '../../core/core.module';
import { RocketPageComponent } from './pages/rocket-details/rocket-page.component';
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            HomePageComponent,
            RocketPageComponent
        ],
        imports: [
            CommonModule,
            CoreModule
        ],
        providers: [
            SpacexApiService
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map