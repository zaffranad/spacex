import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import { RouterModule } from '@angular/router';
import { RocketCardComponent } from './components/rocket-card/rocket-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LaunchCardComponent,
    RocketCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    LaunchCardComponent,
    RocketCardComponent
  ]
})
export class CoreModule {
}
