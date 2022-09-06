import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchproviderService {

  constructor(private http: HttpClient) { }

  searchHospitalApi(hospital: any):Observable<any>{
    console.log(hospital);
    
    return this.http.get("http://localhost:9898/search/searchHospital/"+hospital.pincode+"/"+hospital.service)
  }

  searchMechanicApi(mechanic: any):Observable<any>{
    return this.http.get("http://localhost:9898/search/searchMechanic/"+mechanic)
  }
}