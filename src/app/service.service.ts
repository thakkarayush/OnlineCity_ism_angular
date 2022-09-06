import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }
  
  userSignupApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9898/user/signup", user)
  }

  userLoginApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9898/user/login", user)
  }

  providerSignupApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9898/serviceprovider/signup", user)
  }

  providerLoginApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9898/serviceprovider/login", user)
  }

  uploadProfile(user: any): Observable<any>{
    return this.http.post("http://localhost:9898/serviceprovider/uploadprofile",user);
  }


}
