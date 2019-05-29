import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import {IsLoggedInGuard} from './guards/is-logged-in-guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsLoggedInGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [IsLoggedInGuard],
  exports: [RouterModule],
})
export class AppRoutingModule { }
