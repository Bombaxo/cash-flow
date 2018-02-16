import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cf-footer",
  template: `
    <footer>
      Footer message
    </footer>`,
  styles: [
    `
    footer{
      border-top: .1rem solid;
      text-align: center;
      margin-top: 20px;
      padding: 20px;
    }`
  ]
})
export class FooterComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
