import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './launch-card/launch-card.component';

@NgModule({
  declarations: [
    LaunchCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LaunchCardComponent
  ]
})
export class CoreModule {
}
