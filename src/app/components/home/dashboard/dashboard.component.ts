import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  dateToday = Date.now();
  rainMeter = '5';
  constructor() { }

  ngOnInit(): void {
  }

}
