import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  trueLogin = 'sad@dsa.com';
  truePass = '111111';
  constructor() { }

  checkAuth(login, password){
    return this.trueLogin==login&&this.truePass==password
            ? true
            : false
  }

}
