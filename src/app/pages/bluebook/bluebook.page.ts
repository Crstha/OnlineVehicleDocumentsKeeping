import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-bluebook',
  templateUrl: './bluebook.page.html',
  styleUrls: ['./bluebook.page.scss'],
})
export class BluebookPage implements OnInit {

  public bluebookList: any[];
  public bluebookListBackup: any[]; 

  constructor(public fs:AngularFirestore) { }

  async ngOnInit() {
    this.bluebookList = await this.initializeItems();
  }

  async initializeItems(): Promise<any> {
    const documentList = await this.fs.collection('BluebookDetails')
      .valueChanges().pipe(first()).toPromise();
    this.bluebookListBackup = documentList;
    return documentList;
  }


  async filterList(evt) {
    this.bluebookList = this.bluebookListBackup;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.bluebookList = this.bluebookList.filter(currentDocument => {
      if (currentDocument.name && searchTerm) {
        return (currentDocument.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
