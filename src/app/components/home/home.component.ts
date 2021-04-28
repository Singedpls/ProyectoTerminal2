import { SuperadminService } from './../../services/authguards/roles/superadmin.service';
import { TechnicianService } from './../../services/authguards/roles/technician.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit,AfterViewInit {
  title = 'my-adminlte3-demo-app';
  dateToday = Date.now();
  rainMeter = '5';
  technicianview:boolean =false;
  superadminview:boolean =false;
  username: any;
  constructor(
    private technicianservice:TechnicianService,
    private superadminservice:SuperadminService
  ) { }
  ngAfterViewInit(): void {
    let rid = this.technicianservice.decod()['rrid']
   this.technicianview=(rid== 1 || rid== 2)?true : false;
   this.superadminview = (rid== 1 )?true : false;
   console.log(this.technicianview);
   console.log(this.superadminview);
  }

  ngOnInit(): void {
  
    this.username = this.technicianservice.decod()['username']
    let rid = this.technicianservice.decod()['rrid']
    this.technicianview=(rid== 1 || rid== 2)?true : false;
    this.superadminview = (rid== 1 )?true : false;
   
   
 
  }

}
