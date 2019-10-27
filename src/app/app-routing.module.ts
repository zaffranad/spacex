import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';
import { RocketPageComponent } from './modules/home/pages/rocket-details/rocket-page.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'rocket/:id', component: RocketPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
