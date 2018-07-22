import { Component } from '@angular/core';
import { ExcelService } from './excel.service';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  isLoading = false;
  msgNo = 0;

  constructor(private spreadsheet: ExcelService) {
  }
  onSubmit(nickname: string) {
    this.isLoading = true;
    this.spreadsheet.fetchData().subscribe((data) => {
      const values = data['values'];
      let score = 0;
      for (const i in values) {
        if (values[i][3] === nickname) {
          // tslint:disable-next-line:radix
          score = parseInt(values[i][6]) + parseInt(values[i][5]) + parseInt(values[i][4]);
          this.msgNo = 1;
        }
      }
      if (score === 0) {
        this.msgNo = 3;
      }
      this.isLoading = false;
    });
  }

  reset() {
    this.msgNo = 0;
  }
}
