import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { RouterModule } from '@angular/router';
import { RocketCardComponent } from './rocket-card/rocket-card.component';
import { LaunchFilterComponent } from './launch-filter/launch-filter.component';
import { LaunchFilterPipe } from './launch-filter/pipes/launch-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LaunchCardComponent,
    RocketCardComponent,
    LaunchFilterComponent,
    LaunchFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    LaunchCardComponent,
    RocketCardComponent,
    LaunchFilterComponent,
    LaunchFilterPipe
  ]
})
export class CoreModule {
}
