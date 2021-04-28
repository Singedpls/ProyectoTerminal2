import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { TechnicianaveragegasolineService } from 'src/app/services/technicianreport/technicianaveragegasoline.service';

@Component({
  selector: 'app-technician-average-gasoline',
  templateUrl: './technician-average-gasoline.component.html',
  styleUrls: ['./technician-average-gasoline.component.sass','./technicianaveragegasoline.css']
})
export class TechnicianAverageGasolineComponent implements OnInit {

  highcharts = Highcharts;

  // chartOptions: Highcharts.Options = {}
  chardata: any[] = [];
  chartOptions: any;
  allclients:any[]=[]
  constructor(
    private spinner: NgxSpinnerService,
    private technicianaveragegasoline:TechnicianaveragegasolineService
    
    ){}
   

    ngOnInit(){
      window.scrollTo(0, 0)
      

        this.spinner.show();this.technicianaveragegasoline.TechnicianaverageGasoline().subscribe((result:any) => {
        console.log();
        
     
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
              text: 'Technician Average Usage of Gasoline'
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
                text: 'Average usage of gasoline(%)'
              }
            },
              
            legend: {
              enabled: false
            },
            
            tooltip: {
              pointFormat: `
              Average : <b>{point.y:1f}% </b>
              
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
                format: '{point.y:1f}% Usage', // one decimal
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
