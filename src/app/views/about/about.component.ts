import { Component, OnInit } from "@angular/core";
import { StoreService } from "./../../lib/store.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "cf-about",
  template: `
    <h3><a href="https://academia-binaria.com/categories/Tutorial/Angular/">  Angular 5 Tutorial</a></h3>
      <blockquote>
      <p><em>This component was loaded with lazy load</em></p>
    </blockquote>
    <p *ngIf="userIsAnonymous$ | async; else logged">
      For seeing this block please
      <a routerLink="/credentials/login">Log In</a>
    </p>
    <ng-template #logged><i>This content is private. Only if you log in</i></ng-template>`,
  styles: []
})
export class AboutComponent implements OnInit {

  public userIsAnonymous$: Observable<boolean>;

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.userIsAnonymous$ = this.store.getUserIsAnonymous$();
    console.log(this.userIsAnonymous$ );
  }

}
