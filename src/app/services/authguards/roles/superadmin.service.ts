import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import  decode from  'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class SuperadminService implements CanActivate {
  token: any;
  public jwtHelper=new JwtHelperService;
  decodedToken: any;
  constructor(
    private router: Router
  ) { }
  canActivate(): boolean  {
    return this.authenticated();
  }

 authenticated():boolean{
  this.token = JSON.parse(localStorage.getItem('token'));
  // console.log(decode(this.token));
  this.decodedToken=decode(this.token)
  console.log('******************************************************');
  console.log(this.decodedToken)
  
  if (this.token != null) {
      if (!this.jwtHelper.isTokenExpired(this.token)){
        let roleId = this.decodedToken['rrid']
        let result = (roleId ==1)?true: false 
        console.log(result);
        
        if  (!result){
          console.log(result);
          this.router.navigate(['register'])
          return result
        }
        return result
       }
        
      }else{
        this.router.navigate(['register'])
        return false;
      }
  }
 }

