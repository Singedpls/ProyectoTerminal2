import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  baseUrl ='http://127.0.0.1:8000'
  token = JSON.parse(localStorage.getItem('token'));
  headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
  constructor(private http:HttpClient) { }

  getAllroles(){
    return this.http.get(`${this.baseUrl}/api/auth/roles/`,{headers: this.headers,})
  }
}
