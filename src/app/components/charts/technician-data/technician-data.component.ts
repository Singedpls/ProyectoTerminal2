import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-technician-data',
  templateUrl: './technician-data.component.html',
  styleUrls: ['./technician-data.component.sass','./technician.css']
})
export class TechnicianDataComponent  {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Technician Data'
    },
    xAxis: {
      categories: ['General Service', 'Tuning', 'CarBalancing', 'OilChanges', 'Brakes','Chasis','Air and Breathing','Exterior Lights','Tire Pressure','Car Cleaning','Other'],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of services"
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      type: undefined,
      name: 'Monday',
      data: [1, 31, 50, 40, 2,60, 31, 50, 40, 7,50]
    }, {
      type: undefined,
      name: 'Tuesday',
      data: [30, 20, 10, 5, 6,30, 20, 10, 5, 3,7]
    }, {
      type: undefined,
      name: 'Wednesday',
      data: [55, 45, 20, 3, 31,55, 45, 20, 3, 31,2]
    }, {
      type: undefined,
      name: 'Thursday',
      data: [3, 35, 25, 15, 40,55, 45, 20, 3, 31,20]
    },
    {
      type: undefined,
      name: 'Friday',
      data: [3, 35, 25, 15, 40,55, 45, 20, 3, 31,20]
    }
  ]
  }

}
