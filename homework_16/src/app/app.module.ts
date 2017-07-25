import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChargePhoneComponent } from './charge-phone/charge-phone.component';
import { SuccessChargePhoneComponent } from './success-charge-phone/success-charge-phone.component';
import {AuthService} from './auth-service.service';


const routes: Routes = [
    { path: "login",    component: LoginComponent },
    { path: "charge",   component: ChargePhoneComponent },
    { path: "success",         component: SuccessChargePhoneComponent },
    { path: "**",    component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChargePhoneComponent,
    SuccessChargePhoneComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})



export class AppModule { 


  
}
