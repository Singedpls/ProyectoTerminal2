import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.sass','./vehicle-form.css']
})
export class VehicleFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  vehicleSubmit(value){
    console.log(value);
  }
}
