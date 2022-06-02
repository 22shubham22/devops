import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-starter';
  a = 10;
  b = 10;
  constructor() {}

  ngOnInit() {
    this.foo();
  }

  foo() {
    const a = 1;
    const b = 5;
    const c = a + b;
    return 2 + 3;
  }
}
