import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import Utils from '../utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashBoardService]
})
export class DashboardComponent implements OnInit {

  month: string = "";
  showErrorMessage = false;
  data = [];
  constructor(private _dashBoardService: DashBoardService) {
    this.showErrorMessage = false;
    var _this = this;
    this._dashBoardService.getDashBoardData()
      .subscribe(function (dashboardDetails) {
        console.log("dash", dashboardDetails);
        _this.data = dashboardDetails
      }, function (err) {
        if (err.status == 0) {
          //alert("No Data Loaded");
          console.log(_this)
          _this.showErrorMessage = true;
          _this.data = []
        }
        console.log("In Error", err)
      })

  }

  ngOnInit() {
    this.month = Utils.getCurrentMonth();
    this.showErrorMessage = false;

  }

}
