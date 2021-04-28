import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnicianaveragereviewService {
  baseUrl ='http://127.0.0.1:8000'
  token = JSON.parse(localStorage.getItem('token'));
  headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
  constructor(private http:HttpClient) { }
  
  getTechnicianAverage(){
    return this.http.get(`${this.baseUrl}/api/auth/technicianreviewaverage/`,{headers: this.headers,})
  }
  getAllTechnicians(){
    return this.http.get(`${this.baseUrl}/api/auth/alltechnicians/`,{headers: this.headers,})
  }
  completeReview(data){

    return this .http.post(`${this.baseUrl}/api/review/newreview/`,data,{headers: this.headers,})
  }
}
