import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import  decode from  'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class TechnicianService implements CanActivate {
  token: any;
  public jwtHelper=new JwtHelperService;
  decodedToken: any  =this.decod()
  constructor(
    private router: Router
  ) { }
  canActivate(): boolean  {
    return this.authenticated();
  }

 authenticated():boolean{
  this.token = JSON.parse(localStorage.getItem('token'));
  
  console.log(this.token)
  if (this.token) {
    // console.log(decode(this.token));
  this.decodedToken=decode(this.token)
  console.log('******************************************************');
  console.log(this.decodedToken)
      if (!this.jwtHelper.isTokenExpired(this.token)){
        let roleId = this.decodedToken['rrid']
        let result = (roleId ==2 || roleId ==1 )?true: false  //this picks technician together with superadmin
        console.log(result);
        
        if  (!result){
          console.log(result);
          this.router.navigate(['login'])
          return result
        }
        return result
       }
        
      }else{
        this.router.navigate(['login'])
        return false;
      }
  }
public decod(){
  let token = JSON.parse(localStorage.getItem('token'));
  console.log(token);
  
  if (token){
    return  decode(token );
  }
  
}
}
