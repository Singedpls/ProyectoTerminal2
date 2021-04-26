import { RegisterService } from './../../../services/authentication/register.service';
import { RolesService } from './../../../services/roles/roles.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass','./register.css']
})
export class RegisterComponent implements OnInit {
  allroles:any
  passwordChecker:any;
  submitted = false;
  constructor(
    private rolesservice:RolesService,
    private registerService:RegisterService,
    private router:Router,
    private toastr:ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.rolesservice.getAllroles().subscribe((roles) => {
      console.log(roles)
      this.allroles = roles
    })

  }
  createUser(value){
    this.submitted = true;
    this.passwordChecker = ''
    console.log(value.value);
    // if (value.confirmPassword != value.Password){
    //   this.passwordChecker

    // }c
    delete value.value.phonenumber
    this.spinner.show();
    if (value.valid){

    
      this.registerService.createUser(value.value).subscribe((user) => {
        console.log(user)
        this.spinner.hide();
        this.toastr.success('User Created  Successfuly!')
        this.router.navigate[('home')]

      },error=>{
        this.toastr.error('Error!,Kindly confirm all the information is  filled correctly')
        this.spinner.hide();
      })
  }}

}
