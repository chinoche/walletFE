import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HEADERS = new HttpHeaders().set('Content-Type', 'application/json');
const BASE_URL = 'http://localhost:3000';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(`${ BASE_URL }/info/`,{ headers: HEADERS })
  }

}
