import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent } from '../home/home.component';
import{ DashboardComponent } from '../dashboard/dashboard.component'; 
//import { routes } from './routes';

const routes : Routes = [
  {path:'home',component:HomeComponent},  
  {path:'dashboard',component:DashboardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

