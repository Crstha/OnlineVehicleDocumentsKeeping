import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';


export interface imgFile {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-add-documents',
  templateUrl: './add-documents.page.html',
  styleUrls: ['./add-documents.page.scss'],
})
export class AddDocumentsPage implements OnInit {
   // File upload task 
   fileUploadTask: AngularFireUploadTask;

   // Upload progress
   percentageVal: Observable<number>;
 
   // Track file uploading with snapshot
   trackSnapshot: Observable<any>;
 
   // Uploaded File URL
   UploadedImageURL: Observable<string>;
 
   // Uploaded image collection
   files: Observable<imgFile[]>;
 
   // Image specifications
   imgName: string;
   imgSize: number;
 
   // File uploading status
   isFileUploading: boolean;
   isFileUploaded: boolean;
 
   private filesCollection: AngularFirestoreCollection<imgFile>;

   constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {
    this.isFileUploading = false;
    this.isFileUploaded = false;
    
    // Define uploaded files collection
    this.filesCollection = afs.collection<imgFile>('LicenseCollection');
    this.files = this.filesCollection.valueChanges();
  }
  ngOnInit() {
  }

  uploadImage(event: FileList) {
      
    const file = event.item(0)

    // Image validation
    if (file.type.split('/')[0] !== 'image') { 
      console.log('File type is not supported!')
      return;
    }

    this.isFileUploading = true;
    this.isFileUploaded = false;

    this.imgName = file.name;

    // Storage path
    const fileStoragePath = `documentsStorage/${new Date().getTime()}_${file.name}`;

    // Image reference
    const imageRef = this.afStorage.ref(fileStoragePath);

    // File upload task
    this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);

    // Show uploading progress
    this.percentageVal = this.fileUploadTask.percentageChanges();
    this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(
      
      finalize(() => {
        // Retreive uploaded image storage path
        this.UploadedImageURL = imageRef.getDownloadURL();
        
        this.UploadedImageURL.subscribe(resp=>{
          this.storeFilesFirebase({
            name: file.name,
            filepath: resp,
            size: this.imgSize
          });
          this.isFileUploading = false;
          this.isFileUploaded = true;
        },error=>{
          console.log(error);
        })
      }),
      tap(snap => {
          this.imgSize = snap.totalBytes;
      })
    )
}


storeFilesFirebase(image: imgFile) {
    const fileId = this.afs.createId();
    
    this.filesCollection.doc(fileId).set(image).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
}


}
