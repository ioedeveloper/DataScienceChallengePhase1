import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  // tslint:disable-next-line:max-line-length
  private url = 'https://datascholarsphase2readiness.herokuapp.com/spreadsheet';
  constructor(private http: HttpClient) { }

  getGoogleSpreadsheet() {
    return this.http.get(this.url);
  }
}
