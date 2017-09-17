import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
  trueLogin = 'sad@dsa.com';
  truePass = '111111';
  months = ["01", "02", "03","04","05","06","07","08","09","11","12"];
  years = ["2017","2018", "2019","2020"];

  constructor() { }

  checkAuth(login, password){
    return this.trueLogin==login&&this.truePass==password
            ? true
            : false
  }

  isLoggined(login, password){
          return this.trueLogin==login&&this.truePass==password
            ? true //Observable.(true)
            : false//Observable.of(false)
  }

}
