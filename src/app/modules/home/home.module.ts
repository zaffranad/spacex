import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SpacexApiService } from 'src/app/core/services/spacex-api.service';
import { CoreModule } from '../../core/core.module';
import { LaunchCardComponent } from '../../core/launch-card/launch-card.component';
import { RocketDetailsComponent } from './pages/rocket-details/rocket-details.component';

@NgModule({
  declarations: [
    HomepageComponent,
    RocketDetailsComponent
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
