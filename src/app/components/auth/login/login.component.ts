import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {LoginService} from '../../../services/authentication/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass','./login.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean;

  constructor(
    private router: Router,
    private loginservice:LoginService,
    private toastr:ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }
  login(l){
    window.scrollTo(0, 0)
    console.log("logged in");
    console.log(l)
    this.submitted = true;
    if(l.valid){
      this.spinner.show();
    this.loginservice.login(l.value).subscribe((result:any)=>{
      localStorage.setItem('token', JSON.stringify(result.user.token))
      // console.log(x);
      this.toastr.success('Login Successful!')
      this.router.navigate(['home'])
      this.spinner.hide();
    },error=>{
      this.spinner.hide();
      if(error.status == 400){
        console.log(error);
        
        console.log(error.error.errors.error);
        this.toastr.error(`${error.error.errors.error}`)
      }
    })
    } 
  }

}
