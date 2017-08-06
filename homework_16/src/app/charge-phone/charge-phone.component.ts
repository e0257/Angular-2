import { Component, OnInit } from '@angular/core';
import { InjectionToken, Inject } from '@angular/core';
import { ERRORS } from '../errorMessages';
import { AuthService } from '../auth-service.service';


let appErrors = new InjectionToken('../errorMessages');

@Component({
  selector: 'app-charge-phone',
  templateUrl: './charge-phone.component.html',
  styleUrls: ['./charge-phone.component.css'],
  providers: [{ provide: appErrors, useValue: ERRORS }]
})
export class ChargePhoneComponent implements OnInit {
  phone: string;
  email: string;
  sum: number;
  cvs: number;
  card: number;
  months: Array<string>;
  years: Array<string>;
  selectMonth: String;
  selectYear: String;
  errMes: any;



  constructor( @Inject(appErrors) err: any,
    private authService: AuthService) {
    this.errMes = err;
  }

  ngOnInit() {
    this.months = this.authService.months;
    this.years = this.authService.years;
    this.selectMonth = this.months[0];
    this.selectYear = this.years[0];
  }

}
