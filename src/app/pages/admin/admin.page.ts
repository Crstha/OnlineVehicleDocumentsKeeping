import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    private router:Router,
    private afauth:AngularFireAuth,
    private LoadingCtrl:LoadingController,
  ) { }

  ngOnInit() {
  }

  addDocuments(){
    this.router.navigate(['/add-documents']);
  }

  addBluebookDocuments(){
    this.router.navigate(['/add-bluebook-document']);
  }
  addInsuranceDocuments(){
    this.router.navigate(['/add-insurance-document']);
  }
  async signout(){
    const loading = await this.LoadingCtrl.create({
      spinner:'crescent',
      showBackdrop:true
    });
    loading.present();
    this.afauth.signOut().then(()=>{
      loading.dismiss();
      this.router.navigate(['/login']);
    })
  }

}
