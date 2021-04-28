import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TechnicianService } from 'src/app/services/authguards/roles/technician.service';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass','./client-form.css']
})
export class ClientFormComponent implements OnInit {
  username: any;
  submitted:boolean;
  constructor(
    private clientservice:ClientService,
    private technicianservice:TechnicianService,
    private toastr:ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.username = (this.technicianservice.decod())['username']
  }
  clientSubmit(value){
    
    this.submitted =true;
    console.log(value);
    if(value.valid){
      this.spinner.show();
    this.clientservice.clientCreate(value.value).subscribe(result =>{
      console.log(result);
      this.spinner.hide();
      this.toastr.success('CLient data was uploaded successfully!')
      this.router.navigate(['home'])
      
    },err=>{
      this.spinner.hide();
      console.log(err);
      
      this.toastr.error('Error!Kindly confirm all the information is  filled correctly')
    })
  }
    
  }
}
