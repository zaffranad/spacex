import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import { RouterModule } from '@angular/router';
import { RocketCardComponent } from './components/rocket-card/rocket-card.component';
import { FormsModule } from '@angular/forms';
import { PaginationControlsComponent } from './components/pagination-controls/pagination-controls.component';

@NgModule({
  declarations: [
    LaunchCardComponent,
    RocketCardComponent,
    PaginationControlsComponent
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
    PaginationControlsComponent
  ]
})
export class CoreModule {
}
