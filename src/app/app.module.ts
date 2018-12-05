import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import {MatDatepickerModule , MatNativeDateModule  , MatDialogModule , MatButtonModule , MatCheckboxModule , MatCardModule , MatFormFieldModule , MatInputModule} from '@angular/material';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignupComponent]
})
export class AppModule { }
