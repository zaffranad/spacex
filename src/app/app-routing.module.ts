import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';
import { RocketPageComponent } from './modules/home/pages/rocket-details/rocket-page.component';
import { RocketResolver } from './modules/home/resolvers/rocket-resolver/rocket-resolver.component';
import { HomepageResolver } from './modules/home/resolvers/homepage-resolver/launches-resolver.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    resolve: {
      launches: HomepageResolver
    }
  },
  {
    path: 'rocket/:id',
    component: RocketPageComponent,
    resolve: {
      rocket: RocketResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    RocketResolver,
    HomepageResolver
  ]
})
export class AppRoutingModule {
}
