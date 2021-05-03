import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
// export interface imageData{
//   fileName:string;
//   filePath:string;
//   size:string;
// }
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})


export class SettingsPage implements OnInit {
user:any;

  fileName:string;
  fileSize:string;
  isLoading:boolean;
  isLoaded:boolean;

  // private imageCollection:AngularFirestoreCollection<imageData>;
  // imagefile:Observable<imageData[]>;
  // imageUpload: AngularFireUploadTask;

  constructor(
    private database:AngularFirestore,
    private storage:AngularFireStorage,
    private auth:AuthService,
    private router:Router
    ) {
      // this.isLoading=false;
      // this.isLoaded=false;
     }

  ngOnInit() {
    this.auth.user$.subscribe(user=>{
      this.user = user;
    })
  }

  logOut(){
    this.auth.signout();
  }

  editProfile(){
    this.router.navigate(['/profile-edit'])

  }

  // uploadImagetoFirebase(event){
  //   const file =event.target.files;
  //   console.log(file);
  //   var fileName = file[0];
  //   console.log(fileName);

  //   if(fileName.type.split('/')[0]!=="image"){
  //     console.error("File is not an image");
  //     return;

  //   }

  //   const path =`loginUploads/${new Date().getTime()}_${fileName.name}`;
  //   var fileRef = this.storage.ref(path);

  //   this.imageUpload = this.storage.upload(path,fileName);

   
    
    
  // }

}
