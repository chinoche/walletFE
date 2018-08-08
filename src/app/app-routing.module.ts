import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '**', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule {
}
