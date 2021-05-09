import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-documents',
  templateUrl: './add-documents.page.html',
  styleUrls: ['./add-documents.page.scss'],
})

export class AddDocumentsPage implements OnInit {
  documents: Observable<any[]>;

  documentsName: string = '';
  documentsRef: AngularFirestoreCollection;

  selectedFile: any;
  loading: HTMLIonLoadingElement;
  

  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage, private loadingController: LoadingController) {
    this.documentsRef = afs.collection('LicenseDetails')
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
  remove(document){
    console.log(document);
    if(document.imageUrl) {
      this.afStorage.ref(`License/${document.id}`).delete()
    }
    this.documentsRef.doc(document.id).delete()
  }
}