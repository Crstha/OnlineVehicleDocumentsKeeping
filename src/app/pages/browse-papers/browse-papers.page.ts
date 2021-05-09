import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-browse-papers',
  templateUrl: './browse-papers.page.html',
  styleUrls: ['./browse-papers.page.scss'],
})
export class BrowsePapersPage implements OnInit {
  searchedDocuments = [];
  resultDocument=[];

  constructor(public fs:AngularFirestore) { }

  ngOnInit() {
  }

  search(event){
    let searchKey:string=event.target.value;
    let firstLetter=searchKey.toUpperCase();

    if(searchKey.length==0){
      this.searchedDocuments=[];
      this.resultDocument=[];
    }
    if(this.searchedDocuments.length==0){
      this.fs.collection('LicenseDetails', ref=>ref.where('title','==',firstLetter)).snapshotChanges()
      .subscribe(data=>{
        data.forEach(childData=>{
          this.searchedDocuments.push(childData.payload.doc.data())
        })
      })
    }
    else{
      this.resultDocument=[];
      this.resultDocument.forEach(val=>{
        let name:string=val['title'];
        if(name.toUpperCase().startsWith(searchKey.toUpperCase())){
          if(true){
            this.resultDocument.push(val);
          }
        }
      })
    }

    }
}
