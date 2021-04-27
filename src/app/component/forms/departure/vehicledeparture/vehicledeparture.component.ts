import { TechnicianreportService } from './../../../../services/technicianreport/technicianreport.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { VehicleService } from './../../../../services/vehicle/vehicle.service';
import { SolicitedServiceService } from './../../../../services/solicitedservice/solicited-service.service';
import { TechnicianService } from 'src/app/services/authguards/roles/technician.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicledeparture',
  templateUrl: './vehicledeparture.component.html',
  styleUrls: ['./vehicledeparture.component.sass','./vehicledeparture.css']
})
export class VehicledepartureComponent implements OnInit {
  username: any;
  submitted: boolean =false;
  allsolicitedservices:any[]=[]
   
  dropdownSettings = {};
  pendingvehicles: any;
  constructor(
    private  technicianservice:TechnicianService,
    private solicitedservices:SolicitedServiceService,
    private vehicleservice:VehicleService,
    private spinner:NgxSpinnerService,
    private toastr:ToastrService,
    private router:Router,
    private technicianreportservice:TechnicianreportService
  ) { }

  ngOnInit() {
    this.technicianreportservice.getTechnicianReport().subscribe(x=>{
      console.log(x);
      
    })
    this.vehicleservice.pendingvehicles().subscribe((result:any)=>{
      console.log(result);
      this.pendingvehicles = result 
      for (let i= 0;i<result.length;i++){
        result[i]['fulldetails'] = result[i]['vehicle_plate'] + ' -- refno'+result[i]['id'] 
      }
    })
    this.username = this.technicianservice.decod()['username']
    this.solicitedservices.getSolicitedServices().subscribe((x:any)=>{
      this.allsolicitedservices = x
    });
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'fulldetails',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  vehicleSubmit(value){
    this.submitted = true;
    console.log(value.value);
    value.value['vehicle'] =value.value['vehicle'][0].id
    value.value['status'] = "completed"
    delete value.value.phonenumber
   
    if (value.valid){
      this.spinner.show();
      this.vehicleservice.completeVehicle(value.value).subscribe(result=>{
        console.log(result)
        this.spinner.hide();
        this.toastr.success('Vehicle status updated to Complete!!')
        this.router.navigate(['home'])
      },err=>{
        console.log(err);
        
        this.toastr.error('Error!,Kindly confirm all the information is  filled correctly')
        this.spinner.hide();
      })
    }
  }

}
