import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homepage/home-page.component';
import { SxApiService } from 'src/app/core/services/sx-api.service';
import { CoreModule } from '../../core/core.module';
import { RocketPageComponent } from './pages/rocket-page/rocket-page.component';
import {PictureService} from '../../core/services/tools/picture.service';

@NgModule({
  declarations: [
    HomePageComponent,
    RocketPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [
    SxApiService,
    PictureService
  ]
})
export class HomeModule {
}
