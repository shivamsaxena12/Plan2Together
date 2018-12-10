import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   entries :Array<any>;
  constructor() { }

  ngOnInit() {
    this.entries=[
      {id:1,sub:"FIRST"},
      {id:2,sub:"SECOND"},
      {id:3,sub:"THIRD"}
    ];
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.scrollspy');
      var options = {}
      var instances = M.ScrollSpy.init(elems, options);
    });
  }
  show(entr)
  {
    console.log(entr.id);
  }

}
