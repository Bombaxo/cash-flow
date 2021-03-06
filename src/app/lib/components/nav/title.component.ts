import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "cf-title",
  template: `
    <a routerLink="/">{{ title }}</a> `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class TitleComponent implements OnInit {

  title = "Cash Flow";

  constructor() {}

  ngOnInit() {}
}
