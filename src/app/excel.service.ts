import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  // tslint:disable-next-line:max-line-length
  private url = 'https://sheets.googleapis.com/v4/spreadsheets/1lq6AcmAbkOWidxiN_9gb1LdGAczeOKjbU_r3QpArbu8/values/Form%20Responses%201?key=AIzaSyDBKRDMfrBz9L4S0V-AIKDlCWhK7mIEHV0';

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get(this.url);
  }
}
