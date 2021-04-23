import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-client-chart-data',
  templateUrl: './client-chart-data.component.html',
  styleUrls: ['./client-chart-data.component.sass']
})
export class ClientChartDataComponent  {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    
    chart: {
      type: 'column'
    },
    title: {
      text: 'Client Data'
    },
    subtitle: {
      text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      },
      title: {
        text: 'Days of the week'
      }
    },
    
    yAxis: {
      min: 0,
      title: {
        text: 'No of users(no)'
      }
    },
      
    legend: {
      enabled: false
    },
    
    tooltip: {
      pointFormat: `
      New users : <b>{point.y:1f} Users</b>
      
      `
    },
   
    series: [{
      name: 'Users',
      data: [
        ['Monday', 0],
        ['Tuesday', 6],
        ['Wednesday',2],
        ['Thursday', 10],
        ['Friday', 15],
        ['Saturday', 30],
        ['Sunday', 20]
      ],
      dataLabels: {
        enabled: true,
        // rotation: -90,
        color: '#FFFFFF',
        align: 'center',
        format: '{point.y:1f} Users', // one decimal
        overflow: 'justify',
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  }

}
