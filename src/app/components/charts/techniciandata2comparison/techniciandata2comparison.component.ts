import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SolicitedServiceService } from 'src/app/services/solicitedservice/solicited-service.service';
import { TechnicianreportService } from 'src/app/services/technicianreport/technicianreport.service';

@Component({
  selector: 'app-techniciandata2comparison',
  templateUrl: './techniciandata2comparison.component.html',
  styleUrls: ['./techniciandata2comparison.component.sass']
})
export class Techniciandata2comparisonComponent implements OnInit {
  highcharts = Highcharts;

  chartOptions:any;

  categories:any[] = []
  series: any=[
    {
      type: undefined,
      name: 'services_on_Time',
      data: []
    }, {
      type: undefined,
      name: 'services_out_of_time',
      data: []
    }, 
  ];
  constructor(

    private solicitedservices:SolicitedServiceService,
    private technicianreportservice:TechnicianreportService
  ) { }
  ngOnInit(){

    this.technicianreportservice.getTechnicianReport().subscribe((result:any)=>{
      let technicians=result['data']
      
      for (let i=0;i<technicians.length;i++){
        console.log(technicians[i]);
        console.log(Object.keys(technicians[i])[0]);
        let name=Object.keys(technicians[i])[0]
        let services_on_Time =technicians[i][name]['services_on_Time']
        let services_out_of_time = technicians[i][name]['services_out_of_time']
        this.categories.push(name);
        console.log(this.series[0].data);
        
        this.series[0].data.push(services_on_Time)
        this.series[1].data.push(services_out_of_time)
        // this.series[1].data[i][services_out_of_time]
        
        // let obj = {type:undefined,name:name,data:[services_on_Time,services_out_of_time]}
        // this.series.push(obj)
        
      }
      if(result){
        console.log(this.series);
        console.log(this.categories)
       
       this.chartOptions ={
        chart: {
          type: 'column'
        },
        title: {
          text: 'Services ON/OFF Time'
        },
        xAxis: {
          // categories: ['General Service', 'Tuning', 'CarBalancing', 'OilChanges', 'Brakes','Chasis','Air and Breathing','Exterior Lights','Tire Pressure','Car Cleaning','Other'],
          crosshair: true,
          categories: this.categories
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
        series: this.series
      } }
    })

    // this.solicitedservices.getfilteredSolicitedServices().subscribe((result:any)=>{
    //    console.log(result)
    //    for (let i = 0;i<result.length;i++){
    //     let name=result[i].solicited_service_name
    //      if (this.categories.indexOf(name)==-1){
    //       this.categories.push( result[i].solicited_service_name)
          
    //      }
        
    //    }
    //   //  CREATING THE ENTRIES OF DATA IN THE SERIES
    //    for(let i =0;i<this.series.length; i++){
    //     for(let s =0;s<this.categories.length; s++){
    //       this.series[i].data.push(0)
    //     }
         
    //    }

    //   //  LOOP FOR ADDING THE NUMBER OF SERVICES TO DAYS
    //   for (let i = 0;i<result.length;i++){
    //     let name=result[i].solicited_service_name
    //     console.log(name);
    //     console.log(this.categories);
        
    //     var ind = this.categories.indexOf(name) //INDEX AT THE  CATEGORIES
    //     console.log(ind)
    //     // GET DAY NUMBER
    //     var day = new Date((result[i]['vehicle_entry_date']))
    //     var x = day.getDay()
    //     var d =  (x === 0)? x=6:x-1
    //     console.log(this.series[d]['data'][ind]+1);
        
    //     this.series[d]['data'][ind]= this.series[d]['data'][ind]+1
    //   }
       
       
       
      
    // });
    
  }


}
