import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public postData = {
    email:'',
    password:''
  }

  constructor(
    private router:Router, 
    private http: HttpClient, 
    private authService:AuthService
    ) { }

  ngOnInit() {
  }

  loginAction(){
    console.log((this.postData));
     this.router.navigate(['/home/dashboard']);
    this.authService.login((this.postData)).subscribe((res: any) => {
      if (res.success){
        console.log((res.success));
        this.router.navigate(['/home/dashboard']);
      }else if (res.error){
        console.log(res.error);
      }
    }, (error: any) =>{
       console.log("Network Connection error \n" + error);
    });
  }
}