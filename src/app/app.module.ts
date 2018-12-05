import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { AlertService } from './services/alert/alert.service';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
