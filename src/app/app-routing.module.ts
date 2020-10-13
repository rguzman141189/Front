import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { DashaboardComponent } from './dashaboard/dashaboard.component';


const routes: Routes = [
  {path : '',redirectTo: 'login', pathMatch : 'full'},
  { path: 'login', component : LoginComponent },
  { path: 'landing-page', component : LandingPageComponent },
  { path: 'dashboard', component: DashaboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
