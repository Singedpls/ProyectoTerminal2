import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl ='http://127.0.0.1:8000'
  token = JSON.parse(localStorage.getItem('token'));
  headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
  constructor(private http:HttpClient) { }

  clientCreate(data){
    return this.http.post(`${this.baseUrl}/api/client/client-ap/`,{data},{headers: this.headers,})
  }
  getAllClients(){
    return this.http.get(`${this.baseUrl}/api/client/client-ap/`,{headers: this.headers,})
  }
}
