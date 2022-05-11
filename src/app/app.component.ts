import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-starter';
  a=10;
  b=10;
  c=30;
  constructor() {}

  ngOnInit() {
    this.foo(this.a,this.b);
  }

  foo(a:any,b:any) {
    a=a+10;
    b=b+20;
    return a+b;
  }
}
