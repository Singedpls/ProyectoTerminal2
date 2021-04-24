import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import * as Chart from 'chart.js';

import { Chart } from 'angular-highcharts';
import { SolicitedServiceService } from 'src/app/services/solicitedservice/solicited-service.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent {
  chart = new Chart({
  chart: {
    type: 'line'
  },
  title: {
    text: 'Linechart'
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Line 1',
      type: 'line',
      data: [1, 2, 3]
    },
    {
      name: 'Line 2',
      type: 'line',
      data: [0.1, 1.1, 2.2]
    }
  ]
});

// add point to chart serie
add() {
  this.chart.addPoint(Math.floor(Math.random() * 10));
}
}
