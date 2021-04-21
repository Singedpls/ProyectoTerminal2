import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl ='http://127.0.0.1:8000'
  constructor( private http:HttpClient) { }

  login(data){
    console.log("Server login response");
    // 'http://127.0.0.1:8000/api/auth/login/'
    return this.http.post(`${this.baseUrl}/api/auth/login/`,{'user':data});
  }
}
