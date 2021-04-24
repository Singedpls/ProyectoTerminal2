import { Observable } from 'rxjs';
import { ClientChartService } from './../../../services/charts/client-chart/client-chart.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-client-chart-data',
  templateUrl: './client-chart-data.component.html',
  styleUrls: ['./client-chart-data.component.sass']
})
export class ClientChartDataComponent implements OnInit   {
  
  highcharts = Highcharts;

  // chartOptions: Highcharts.Options = {}
  chardata: any[] = [];
  chartOptions: any;
  constructor(
    private clientchartservice:ClientChartService
    ){}

    ngOnInit(){
      this.clientchartservice.getfiltereddata().subscribe(clients => {

        console.log(clients)
        var data= [
          ['Monday', 0],
          ['Tuesday', 0],
          ['Wednesday',0],
          ['Thursday', 0],
          ['Friday', 0],
          ['Saturday', 0],
          ['Sunday', 0]
        ];
        for (let i =0;i<Object.keys(clients).length;i++){
          
          var day = new Date((clients[i]['joindate']))
          var x = day.getDay()
          
          var d =  (x === 0)? x=6:x-1
          console.log(d);
         
          data[d][1]=Number(data[d][1])+1
         
          console.log(day);
          
        }
        this.chardata =data
        this.chartOptions = {

            chart: {
              
              type: 'column'
            },
            title: {
              text: 'Client Data'
            },
            subtitle: {
              text: 'Source: <a href="">Database</a>'
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
            exporting: {
              enabled: true
            },
            
            
            series: [{
              name: 'Users',
              type:'column',
              data: this.chardata,
              
              
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
    })}

}
