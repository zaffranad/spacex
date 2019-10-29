import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import { RouterModule } from '@angular/router';
import { RocketCardComponent } from './components/rocket-card/rocket-card.component';
import { LaunchFilterComponent } from './components/launch-filter/launch-filter.component';
import { LaunchFilterPipe } from './components/launch-filter/pipes/launch-filter.pipe';
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
