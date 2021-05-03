import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { ImageserviceService } from 'src/app/services/imageservice.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-dummy-documents',
  templateUrl: './add-dummy-documents.page.html',
  styleUrls: ['./add-dummy-documents.page.scss'],
})
export class AddDummyDocumentsPage implements OnInit {

  documents: Observable<any[]>;

  documentsName: string = '';
  documentsRef: AngularFirestoreCollection;

  selectedFile: any;
  loading: HTMLIonLoadingElement;
  

  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage, private loadingController: LoadingController) {
    this.documentsRef = afs.collection('Documents')
    this.documents = this.documentsRef.valueChanges();
  }
  ngOnInit(){
  }

  chooseFile (event) {
    this.selectedFile = event.target.files
  }

  addDocuments(){
    this.documentsRef.add({
      title: this.documentsName
    })
    .then(async resp => {

      const imageUrl = await this.uploadFile(resp.id, this.selectedFile)

      this.documentsRef.doc(resp.id).update({
        id: resp.id,
        imageUrl: imageUrl || null
      })
    }).catch(error => {
      console.log(error);
    })
  }

  async uploadFile(id, file): Promise<any> {
    if(file && file.length) {
      try {
        await this.presentLoading();
        const task = await this.afStorage.ref('License').child(id).put(file[0])
        this.loading.dismiss();
        return this.afStorage.ref(`License/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    return this.loading.present();
  }



  remove(item){
    console.log(item);
    if(item.imageUrl) {
      this.afStorage.ref(`License/${item.id}`).delete()
    }
    this.documentsRef.doc(item.id).delete()
  }
}

