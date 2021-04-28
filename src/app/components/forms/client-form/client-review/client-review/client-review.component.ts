import { TechnicianaveragereviewService } from './../../../../../services/technicianreport/technicianaveragereview.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TechnicianService } from 'src/app/services/authguards/roles/technician.service';
import { SolicitedServiceService } from 'src/app/services/solicitedservice/solicited-service.service';
import { TechnicianreportService } from 'src/app/services/technicianreport/technicianreport.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.sass','./client-review.css']
})
export class ClientReviewComponent implements OnInit {

  username: any;
  submitted: boolean =false;
  allsolicitedservices:any[]=[]
   
  dropdownSettings = {};
  pendingvehicles: any;
  alltechnicians: any;
  constructor(
    private  technicianservice:TechnicianService,
    private technicianaverageservice:TechnicianaveragereviewService,
    private vehicleservice:VehicleService,
    private spinner:NgxSpinnerService,
    private toastr:ToastrService,
    private router:Router,
    private technicianreportservice:TechnicianreportService,

  ) { }

  ngOnInit() {
    
  
    this.username = this.technicianservice.decod()['username']
    this.technicianaverageservice.getAllTechnicians().subscribe((result:any)=>{
      this.alltechnicians = result
    });
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'username',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  reviewsubmit(value){
    this.submitted = true;
    console.log(value);
    console.log(value.value);
    value.value['technician_incharge'] =value.value['technician_incharge'][0].id
  
   
    if (value.valid){
      this.spinner.show();
      this.technicianaverageservice.completeReview(value.value).subscribe(result=>{
        console.log(result)
        this.spinner.hide();
        this.toastr.success('Thank you for the review!')
        this.router.navigate(['home'])
      },err=>{
        console.log(err);
        
        this.toastr.error('Error!,server error')
        this.spinner.hide();
      })
    }
  }

}
