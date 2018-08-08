import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000';
const HEADERS = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user) {
    user.password = btoa(user.password);
    return this.http.post(`${ BASE_URL }/auth/login`, user, { headers: HEADERS });
  }

  signup(user) {
    user.password = btoa(user.password);
    user.password_confirmation = btoa(user.password_confirmation);
    user.balance = 2;
    return this.http.post(`${ BASE_URL }/signup`, user, { headers: HEADERS })
  }
}
