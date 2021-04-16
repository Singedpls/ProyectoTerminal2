import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-adminlte3-demo-app';
  dateToday = Date.now();
  rainMeter = '5';
}
