import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CredentialsModule } from "./credentials.module";
import { CredentialsComponent } from "./credentials.component";
import { LogoutComponent } from "./logout.component";

const routes: Routes = [
  {
    path: "login",
    component: CredentialsComponent,
    data: {
      alternate: "Registration",
      credential: { email: "test@test.com", password: "1234" },
      title: "LogIn"
    }
  },
  {
    path: "registration",
    component: CredentialsComponent,
    data: {
      alternate: "LogIn",
      credential: { email: "", password: "" },
      title: "Registration"
    }
  },
  {
    path: "logout",
    component: LogoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CredentialsRoutingModule {}
