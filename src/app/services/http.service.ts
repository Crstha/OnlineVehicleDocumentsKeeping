import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  userData: any;

  constructor(private http: HttpClient) { }

post(serviceName:string, data:any){
  const headers = new HttpHeaders();
  const options = { headers:headers, withCredentials:false};
  const url =environment.apiUrl +serviceName;
  return this.http.post(url,data,options);

}
postWithToken(serviceName: string, data: any){
  const headers = new HttpHeaders();
  
  const options = { headers: headers};
  const url = environment.apiUrl + serviceName;
  return this.http.post(url, data, options);
}

}
