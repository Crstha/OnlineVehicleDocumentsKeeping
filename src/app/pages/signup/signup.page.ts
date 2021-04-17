import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  public postData = {
    fullname:'',
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

  signUpAction(){
    console.log(this.postData);
    this.authService.signup((this.postData)).subscribe((res:any)=>{
      if(res.success){
        console.log((res.success));
        this.router.navigate(['/login']);
      }else if(res.error){
       console.log((res.err));
      }
    },(error:any)=>{
      console.log("Network Connection Error \n"+ JSON.stringify(error))
    });
  }
}
