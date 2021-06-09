import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-browse-papers',
  templateUrl: './browse-papers.page.html',
  styleUrls: ['./browse-papers.page.scss'],
})
export class BrowsePapersPage implements OnInit {
  // searchedDocuments = [];
  // resultDocument=[];

  public insuranceList: any[];
  public insuranceListBackup: any[]; 

  constructor(public fs:AngularFirestore) { }

  async ngOnInit() {
    this.insuranceList = await this.initializeItems();
  }

  async initializeItems(): Promise<any> {
    const documentList = await this.fs.collection('InsuranceDetails')
      .valueChanges().pipe(first()).toPromise();
    this.insuranceListBackup = documentList;
    return documentList;
  }


  async filterList(evt) {
    this.insuranceList = this.insuranceListBackup;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.insuranceList = this.insuranceList.filter(currentDocument => {
      if (currentDocument.name && searchTerm) {
        return (currentDocument.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}







  // search(event){
  //   let searchKey:string=event.target.value;
  //   let firstLetter=searchKey.toUpperCase();

  //   if(searchKey.length==0){
  //     this.searchedDocuments=[];
  //     this.resultDocument=[];
  //   }
  //   if(this.searchedDocuments.length==0){
  //     this.fs.collection('LicenseDetails', ref=>ref.where('title','==',firstLetter)).snapshotChanges()
  //     .subscribe(data=>{
  //       data.forEach(childData=>{
  //         this.searchedDocuments.push(childData.payload.doc.data())
  //       })
  //     })
  //   }
  //   else{
  //     this.resultDocument=[];
  //     this.resultDocument.forEach(val=>{
  //       let name:string=val['title'];
  //       if(name.toUpperCase().startsWith(searchKey.toUpperCase())){
  //         if(true){
  //           this.resultDocument.push(val);
  //         }
  //       }
  //     })
  //   }

  //   }

