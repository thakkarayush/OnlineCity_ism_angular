import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderServiceService {

  constructor(private http: HttpClient) { }

  providerLoginApi(provider: any): Observable<any> {
    return this.http.post("http://localhost:9898/serviceprovider/login", provider)
  }
}
