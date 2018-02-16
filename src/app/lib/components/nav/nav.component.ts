import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cf-nav",
  template: `
    <nav>
      <ul class="row">
        <li class="button button-outline">
          <cf-title></cf-title>
        </li>
        <li class="button button-outline">
          <a routerLink="/operations">Operations</a>
        </li>
        <li class="button button-outline">
          <a routerLink="/about">About Us</a>
        </li>
        <li class="button button-outline">
        <cf-user-login></cf-user-login>
        </li>
      </ul>
      <cf-user-message></cf-user-message>
    </nav>`,
  styles: [
    `
    nav {
      border-bottom: .1rem solid;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }

    nav ul li{
      margin-right: 10px;
    }
    nav ul li a{
        padding: 20px 0;
    }`
  ]
})
export class NavComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
