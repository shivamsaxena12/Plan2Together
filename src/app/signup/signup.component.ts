import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 signupForm : FormGroup;
  
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
   
    this.signupForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      confirmPassword:['', [Validators.required,Validators.minLength(8),RxwebValidators.compare({fieldName:'password'})]]
    });
    this.signupForm.valueChanges.subscribe(console.log);
  }


  get firstName()
  {
    return this.signupForm.get('firstName');
  }
  
  get lastName()
  {
    return this.signupForm.get('lastName');
  }

get username()
{
  return this.signupForm.get('username');
}


get password()
{
  return this.signupForm.get('password');
}

get confirmPassword()
{
  return this.signupForm.get('confirmPassword');
}

}



