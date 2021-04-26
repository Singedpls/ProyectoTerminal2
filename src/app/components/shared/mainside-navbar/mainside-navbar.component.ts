import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/services/authguards/roles/superadmin.service';
import { TechnicianService } from 'src/app/services/authguards/roles/technician.service';

@Component({
  selector: 'app-mainside-navbar',
  templateUrl: './mainside-navbar.component.html',
  styleUrls: ['./mainside-navbar.component.sass']
})
export class MainsideNavbarComponent implements OnInit {
  dateToday = Date.now();
  rainMeter = '5';
  technicianview:boolean =false;
  superadminview:boolean =false;
  username:any
  constructor(
    private technicianservice:TechnicianService,
    private superadminservice:SuperadminService
  ) { }

  ngOnInit(): void {

    this.username = this.technicianservice.decod()['username']
    let rid = this.technicianservice.decod()['rrid']
    this.technicianview=(rid== 1 || rid== 2)?true : false;
    this.superadminview = (rid== 1 )?true : false;
    console.log(this.technicianview);
    console.log(this.superadminview);
  }

}
