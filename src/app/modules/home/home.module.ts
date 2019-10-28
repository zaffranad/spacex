import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SpacexApiService } from 'src/app/core/services/spacex-api.service';
import { CoreModule } from '../../core/core.module';
import { RocketPageComponent } from './pages/rocket-details/rocket-page.component';

@NgModule({
  declarations: [
    HomepageComponent,
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
export class HomeModule {
}
