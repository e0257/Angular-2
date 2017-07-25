import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charge-phone',
  templateUrl: './charge-phone.component.html',
  styleUrls: ['./charge-phone.component.css']
})
export class ChargePhoneComponent implements OnInit {
  phone: string;
  email: string;
  sum: number;
  cvs: number;
  card: number;
  months = ["01", "02", "03","04","05","06","07","08","09","11","12"];
  years = ["2017","2018", "2019","2020"]
  selectMonth;// = this.months[0];
  selectYear;// = this.years[0];

  constructor() { }

  ngOnInit() {
  }

}
