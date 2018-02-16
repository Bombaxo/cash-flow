import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CredentialsRoutingModule } from "./credentials.routing";
import { CredentialsService } from "./credentials.service";
import { FormsModule } from "@angular/forms";
import { CredentialsComponent } from "./credentials.component";
import { LogoutComponent } from "./logout.component";

@NgModule({
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    FormsModule
  ],
  declarations: [
    CredentialsComponent,
    LogoutComponent
  ],
  providers: [
    CredentialsService
  ]
})
export class CredentialsModule {}
