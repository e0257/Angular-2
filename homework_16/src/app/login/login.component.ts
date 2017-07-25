import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service.service';
import { InjectionToken, Inject } from '@angular/core';
import { ERRORS } from '../errorMessages';

let appErrors = new InjectionToken('../errorMessages');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{provide: appErrors, useValue: ERRORS }]
})


export class LoginComponent  {
  authtorisation = true;
  email: string;
  password: string;
  errMes: any;

  

  constructor(@Inject(appErrors) err: any,
              private router: Router,
              private authService: AuthService) { 
                this.errMes = err;
              }

  

  auth(){
     this.authtorisation = this.authService.checkAuth(this.email, this.password);
     if (this.authtorisation) {
       this.router.navigate(['/charge']);
     }
  }

}
