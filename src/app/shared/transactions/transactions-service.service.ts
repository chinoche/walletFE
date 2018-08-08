import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

const HEADERS = new HttpHeaders().set('Content-Type', 'application/json');
const BASE_URL = 'http://localhost:3000';
@Injectable()
export class TransactionsServiceService {

  constructor(private http: HttpClient) { }

  transfer(transaction) {
    return this.http.post(`${ BASE_URL }/transaction/`, transaction, { headers: HEADERS });
  }

}
