import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import  decode from  'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService implements CanActivate {
  token: any;
  public jwtHelper=new JwtHelperService;
  
  constructor(
    private router: Router
  ) { }
  canActivate(): boolean  {
    return this.authenticated();
  }

 authenticated():boolean{
  this.token = JSON.parse(localStorage.getItem('token'));
  
  
  if (this.token) {
    if(!this.jwtHelper.isTokenExpired(this.token) == false){
      this.router.navigate(['login'])
      return false;
    }
        return !this.jwtHelper.isTokenExpired(this.token);
      }else{
        this.router.navigate(['login'])
        return false;
      }
  }
}
