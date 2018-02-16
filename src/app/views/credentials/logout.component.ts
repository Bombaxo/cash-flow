import { Component, OnInit } from "@angular/core";
import { CredentialsService } from "./credentials.service";
import { Router } from "@angular/router";
import { StoreService } from "../../lib/store.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "cf-logout",
  template: `
    You logged out.
    <a routerLink="/credentials/login">Login again</a>`,
  styles: [ ]
})
export class LogoutComponent implements OnInit {

  public userIsAnonymous$: Observable<boolean>;

  constructor(
    private credentialsService: CredentialsService,
    private store: StoreService,
    private router: Router
  ) {}

  public ngOnInit() {

    this.store.emitUserToken(null);
    this.router.navigateByUrl("/credentials/login");
  }

}
