import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl ='http://127.0.0.1:8000'
  token = JSON.parse(localStorage.getItem('token'));
  headers = new HttpHeaders().set('Authorization', `Token ${this.token}`);
  constructor(private http:HttpClient) { }

  vehicleCreate(data){
    return this.http.post(`${this.baseUrl}/api/vehicle/vehicle-ap/`,{data},{headers: this.headers,})
  }
  pendingvehicles(){
    return this.http.get(`${this.baseUrl}/api/vehicle/vehicle-ap/pending`,{headers: this.headers,})
  }

  completeVehicle(data){
    
    return this .http.post(`${this.baseUrl}/api/vehicle/vehicle-ap/complete`,data,{headers: this.headers,})
  }
}
