import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DASH} from 'angular-bootstrap-md/lib/free/utils/keyboard-navigation';
import {AuthGuard} from './auth.guard';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AuthComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
