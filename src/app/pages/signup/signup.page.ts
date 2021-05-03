
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	name:string;
	email:string;
	phone:string;
	password:string;
	

	constructor(
		// private fb:FormBuilder,
		private afs: AngularFirestore,
		private afauth:AngularFireAuth,
		private router: Router,
		private loadingCtrl: LoadingController,
		private toastr:ToastController,
		) { }

		ngOnInit() {
		}


	async signUpAction(){
		if(this.name && this.email && this.phone && this.password){
			const loading = await this.loadingCtrl.create({
				message:'proccessing',
				spinner:'crescent',
				showBackdrop:true
			});
			loading.present();
			this.afauth.createUserWithEmailAndPassword(this.email,this.password)
			.then((data)=>{
				data.user.sendEmailVerification();
				this.afs.collection('user').doc(data.user.uid).set({
					'userId':data.user.uid,
					'userName':this.name,
					'userEmail':this.email,
					'userPhone':this.phone,
					'createdAt':Date.now()
				})
				.then(()=>{
					loading.dismiss();
					this.toast('Registration Success!Please Check Your Email Address', 'success')
					this.router.navigate(['/login']);
				})
				.catch(error=>{
					loading.dismiss();
					this.toast(error.message,'danger');
					
				})
			})
			.catch(error=>{
				loading.dismiss();
				this.toast(error.message, 'danger');
			})
		}else{
			this.toast('Please Fill the Form Completely!','warning');

		}
	}//end of signup
	async toast(message, status){
		const toast = await this.toastr.create({
			message:message,
			color:status,
			position:'top',
			duration:2000
		});
		toast.present();
	}//end of toast
}
