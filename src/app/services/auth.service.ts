import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>('');


  constructor(
    private httpService:HttpService,
  ) { }

  login(postData:any):Observable<any>{
    return this.httpService.post('login', postData);
  }

  signup(postData:any):Observable<any>{
    return this.httpService.post('register', postData);
  }
}
