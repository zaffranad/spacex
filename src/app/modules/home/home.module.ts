import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpacexApiService } from 'src/app/shared/services/spacex-api.service';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    SpacexApiService
  ]
})
export class HomeModule { }
