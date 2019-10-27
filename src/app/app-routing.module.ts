import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';
import { RocketDetailsComponent } from './modules/home/pages/rocket-details/rocket-details.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'rocket/:id', component: RocketDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
