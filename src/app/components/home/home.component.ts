import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'my-adminlte3-demo-app';
  dateToday = Date.now();
  rainMeter = '5';
  constructor() { }

  ngOnInit(): void {
  }

}
