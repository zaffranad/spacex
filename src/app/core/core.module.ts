import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LaunchCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    LaunchCardComponent
  ]
})
export class CoreModule {
}
