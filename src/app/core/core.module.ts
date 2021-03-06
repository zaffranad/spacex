import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import { RouterModule } from '@angular/router';
import { RocketCardComponent } from './components/rocket-card/rocket-card.component';
import { FormsModule } from '@angular/forms';
import { PaginationControlsComponent } from './components/pagination-controls/pagination-controls.component';
import { PicsRubanComponent } from './components/pics-ruban/pics-ruban.component';

@NgModule({
  declarations: [
    LaunchCardComponent,
    RocketCardComponent,
    PaginationControlsComponent,
    PicsRubanComponent
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
    PaginationControlsComponent,
    PicsRubanComponent
  ]
})
export class CoreModule {
}
