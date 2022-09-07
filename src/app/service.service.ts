import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  emailsend(email:any):Observable<any>{
    return this.http.post(environment.url+"user/otpsend",email)
  }
  checkotp(otpbean:any):Observable<any>{
    return this.http.post(environment.url+"user/otp",otpbean)
  }
  resetpassword(passwordbean:any):Observable<any>{
    return this.http.post(environment.url+"user/forgot",passwordbean)
  }

}
