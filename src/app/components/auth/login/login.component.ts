import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../../services/authentication/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass','./login.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginservice:LoginService,
  ) { }

  ngOnInit(): void {
  }
  login(l){
    console.log("logged in");
    console.log(l)
    this.loginservice.login(l).subscribe((result:any)=>{
      localStorage.setItem('token', JSON.stringify(result.user.token))
      // console.log(x);
      this.router.navigate(['home'])
      
    },error=>{
      if(error.status == 400){
        console.log(error.error.errors.error);
      }
      
      
    })
   
    
  }

}
