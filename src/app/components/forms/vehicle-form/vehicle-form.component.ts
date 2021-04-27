import { SolicitedServiceService } from './../../../services/solicitedservice/solicited-service.service';
import { VehicleService } from './../../../services/vehicle/vehicle.service';
import { ClientService } from 'src/app/services/client/client.service';
import { Component, OnInit } from '@angular/core';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { TechnicianService } from 'src/app/services/authguards/roles/technician.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.sass','./vehicle-form.css']
})
export class VehicleFormComponent implements OnInit {
  dropdownList = [];
  client = [];
  // mindate=new Date().toISOString().slice(0, 10)
  mindate;

  
 
  dropdownSettings = {};
  allclients:any[] =[]
  allsolicitedservices:any[]=[]
  username: any;
  submitted: boolean = false;
  constructor(
    private clientservice:ClientService,
    private vehicleservice:VehicleService,
    private solicitedservices:SolicitedServiceService,
    private technicianservice:TechnicianService,
    private toastr:ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(){
    window.scrollTo(0, 0)
    this.username = this.technicianservice.decod()['username']
    // this.solicitedservices.getfilteredSolicitedServices().subscribe((x:any)=>{
    //    console.log(x)
       
    // });
    this.solicitedservices.getSolicitedServices().subscribe((x:any)=>{
      this.allsolicitedservices = x
    });
    this.dropdownList = [
    { item_id: 1, item_text: 'Alex Murphy Murphy' },
    { item_id: 2, item_text: 'Murphy' },
    { item_id: 3, item_text: 'Woody' },
    { item_id: 4, item_text: 'Kleiny' },
    { item_id: 5, item_text: 'New Neymar' }
  ];

  this.dropdownSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'fulldetails',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  this.clientservice.getAllClients().subscribe((data:any) =>{
    for(let i=0;i<data.length;i++){
      console.log(data[i]['first_name']);
      data[i]['fulldetails'] = data[i]['first_name'] +data[i]['second_name']+"-" +'0'+ data[i]['phone']
      
    }
    this.allclients =data
    console.log(data);
    
  })
  this.mindate = this.currenttime()
  console.log(this.mindate);
  
}

currenttime(){
  var dat = new Date().toISOString()
  var date = new Date(dat);
  var en = date.getFullYear()+'-' + (date.getMonth()+1<10?'0'+(date.getMonth()+1):(date.getMonth()+1)) + '-'+date.getDate() + "T"+(date.getHours()<10?'0'+date.getHours():date.getHours())+":"+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())
  return en;
}
onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}

  vehicleSubmit(value){
    if(value.value.client){
      value.value['client_id']=value.value.client[0].id
    }
  
    delete value['client'];
    console.log(value);
    this.submitted = true;
    if(value.valid){
      this.spinner.show();
    this.vehicleservice.vehicleCreate(value.value).subscribe(data=>{
      console.log(data);
      this.spinner.hide();
      this.toastr.success('Data was uploaded successfully!')
      this.router.navigate(['home'])

      
    },err=>{
      this.spinner.hide();
      this.toastr.error('Error!Kindly confirm all the information is  filled correctly')
    })
  }
  }
}
