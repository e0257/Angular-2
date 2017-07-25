import { Component } from '@angular/core';
import { InjectionToken, Inject } from '@angular/core';
import { ERRORS } from '../errorMessages';

let appErrors = new InjectionToken('../errorMessages');

@Component({
  selector: 'app-charge-phone',
  templateUrl: './charge-phone.component.html',
  styleUrls: ['./charge-phone.component.css'],
  providers: [{provide: appErrors, useValue: ERRORS }]
})
export class ChargePhoneComponent {
  phone: string;
  email: string;
  sum: number;
  cvs: number;
  card: number;
  months = ["01", "02", "03","04","05","06","07","08","09","11","12"];
  years = ["2017","2018", "2019","2020"]
  selectMonth = this.months[0];
  selectYear = this.years[0];
  errMes: any;

  

  constructor(@Inject(appErrors) err: any){this.errMes = err; }

}
