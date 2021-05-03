import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;

  constructor(
    private auth:AuthService,
    private toastr:ToastController,
    private router:Router, 
    private http: HttpClient, 
	  private authObj:AngularFireAuth,
	
    ) { }

  ngOnInit() {
  }
 
  loginAction(){
    if(this.email && this.password)
    {
      this.auth.signin(this.email, this.password);

    }else{
      this.toast('Please enter your email & password','warning');
    }
  }
  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message:message,
      color:status,
      position:'top',
      duration:2000
    });
    toast.present();
  }

}  