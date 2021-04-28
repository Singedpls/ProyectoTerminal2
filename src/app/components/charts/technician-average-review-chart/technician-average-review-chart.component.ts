import { TechnicianaveragereviewService } from './../../../services/technicianreport/technicianaveragereview.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClientChartService } from 'src/app/services/charts/client-chart/client-chart.service';

@Component({
  selector: 'app-technician-average-review-chart',
  templateUrl: './technician-average-review-chart.component.html',
  styleUrls: ['./technician-average-review-chart.component.sass','./technicianaverage.css']
})
export class TechnicianAverageReviewChartComponent implements OnInit {

  highcharts = Highcharts;

  // chartOptions: Highcharts.Options = {}
  chardata: any[] = [];
  chartOptions: any;
  allclients:any[]=[]
  constructor(
    private clientchartservice:ClientChartService,
    private spinner: NgxSpinnerService,
    private technicianaveragereviewservice:TechnicianaveragereviewService
    
    ){}

    ngOnInit(){
      window.scrollTo(0, 0)
      this.spinner.show();
      this.technicianaveragereviewservice.getTechnicianAverage().subscribe((result:any) =>{
        console.log(result);
        
     
        this.spinner.hide();
      
      //   var data= [
      //     ['Monday', 0],
      //     ['Tuesday', 0],
      //     ['Wednesday',0],
      //     ['Thursday', 0],
      //     ['Friday', 0],
      //     ['Saturday', 0],
      //     ['Sunday', 0]
      //   ];
       var data = result.data;
        this.chardata =data
        this.chartOptions = {

            chart: {
              
              type: 'column'
            },
            title: {
              text: 'Technician Average Ratings'
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
                text: 'Name of Technician'
              }
            },
            
            yAxis: {
              min: 0,
              title: {
                text: 'No of Ratings(avg no)%'
              }
            },
              
            legend: {
              enabled: false
            },
            
            tooltip: {
              pointFormat: `
              Ratings : <b>{point.y:1f}% </b>
              
              `
            },
            exporting: {
              enabled: true
            },
            
            
            series: [{
              name: 'Ratings',
              type:'column',
              data: this.chardata,
              
              
              dataLabels: {
                enabled: true,
                // rotation: -90,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:1f}% Ratings', // one decimal
                overflow: 'justify',
                y: 10, // 10 pixels down from the top
                style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
                }
              }
            }]
         
        
      }
    },error=>{
      this.spinner.hide();
    })
  }


}
