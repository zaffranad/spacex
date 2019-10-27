import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { RouterModule } from '@angular/router';
import { RocketCardComponent } from './rocket-card/rocket-card.component';

@NgModule({
  declarations: [
    LaunchCardComponent,
    RocketCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    LaunchCardComponent,
    RocketCardComponent
  ]
})
export class CoreModule {
}
