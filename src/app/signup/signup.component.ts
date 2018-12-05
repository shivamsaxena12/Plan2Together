import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  minDate = new Date(1980, 0, 1);
  maxDate = new Date(2019, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}
