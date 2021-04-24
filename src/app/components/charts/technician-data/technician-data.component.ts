import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SolicitedServiceService } from 'src/app/services/solicitedservice/solicited-service.service';
@Component({
  selector: 'app-technician-data',
  templateUrl: './technician-data.component.html',
  styleUrls: ['./technician-data.component.sass','./technician.css']
})
export class TechnicianDataComponent  {
  highcharts = Highcharts;

  chartOptions:any;

  categories:any[] = []
  series: any=[
    {
      type: undefined,
      name: 'Monday',
      data: []
    }, {
      type: undefined,
      name: 'Tuesday',
      data: []
    }, {
      type: undefined,
      name: 'Wednesday',
      data: []
    }, {
      type: undefined,
      name: 'Thursday',
      data: []
    },
    {
      type: undefined,
      name: 'Friday',
      data: []
    },
    {
      type: undefined,
      name: 'Saturday',
      data: []
    },
    {
      type: undefined,
      name: 'Sunday',
      data: []
    }
  ];
  constructor(

    private solicitedservices:SolicitedServiceService
  ) { }
  ngOnInit(){
    this.solicitedservices.getfilteredSolicitedServices().subscribe((result:any)=>{
       console.log(result)
       for (let i = 0;i<result.length;i++){
        let name=result[i].solicited_service_name
         if (this.categories.indexOf(name)!=1){
          this.categories.push( result[i].solicited_service_name)
          
         }
        
       }
      //  CREATING THE ENTRIES OF DATA IN THE SERIES
       for(let i =0;i<this.series.length; i++){
        for(let s =0;s<this.categories.length; s++){
          this.series[i].data.push(0)
        }
         
       }

      //  LOOP FOR ADDING THE NUMBER OF SERVICES TO DAYS
      for (let i = 0;i<result.length;i++){
        let name=result[i].solicited_service_name
        console.log(name);
        console.log(this.categories);
        
        var ind = this.categories.indexOf(name) //INDEX AT THE  CATEGORIES
        console.log(ind)
        // GET DAY NUMBER
        var day = new Date((result[i]['vehicle_entry_date']))
        var x = day.getDay()
        var d =  (x === 0)? x=6:x-1
        console.log(this.series[d]['data'][ind]+1);
        
        this.series[d]['data'][ind]= this.series[d]['data'][ind]+1
      }
       
       
       if(result){
        console.log(this.series);
        console.log(this.categories)
       
       this.chartOptions ={
        chart: {
          type: 'column'
        },
        title: {
          text: 'Technician Data'
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
      
    });
    
  }


}
