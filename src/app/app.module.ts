import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import {MatDatepickerModule , MatNativeDateModule  , MatDialogModule , MatButtonModule , MatCheckboxModule , MatCardModule , MatFormFieldModule , MatInputModule } from '@angular/material';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import * as M from 'materialize-css';
import * as $ from 'jquery';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
 
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    FormsModule,  
    ReactiveFormsModule,
    RxReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignupComponent]
})
export class AppModule { }
