import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnicianaveragegasolineService {
  baseUrl ='http://127.0.0.1:8000'
  token = JSON.parse(localStorage.getItem('token'));
  headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
  constructor(private http:HttpClient) { }


  TechnicianaverageGasoline(){
    return this.http.get(`${this.baseUrl}/api/auth/technicianaveragegasoline/`,{headers: this.headers,})
  }
}
