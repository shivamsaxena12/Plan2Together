import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import {MatDialog , MatDialogConfig} from '@angular/material';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm : FormGroup;
  
  constructor(private fb : FormBuilder,private signup : MatDialog) {}

  openSignup()
  {
    const signupConfig = new MatDialogConfig();

    signupConfig.disableClose = true;
    signupConfig.autoFocus = true;

    this.signup.open(SignupComponent , signupConfig);
  }
   
  ngOnInit() {
    this.loginForm = this.fb.group({

        username:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
        remember: false
    });
   
    this.loginForm.valueChanges.subscribe(console.log);
    
  }

  get username()
  {
    return this.loginForm.get('username');
  }

  
  get password()
  {
    return this.loginForm.get('password');
  }

  
  get remember()
  {
    return this.loginForm.get('remember');
  }

 
}
