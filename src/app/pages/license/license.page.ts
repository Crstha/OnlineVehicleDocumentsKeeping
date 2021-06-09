import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {

  public licenseList: any[];
  public licenseListBackup: any[]; 

  constructor(public fs:AngularFirestore) { }

  async ngOnInit() {
    this.licenseList = await this.initializeItems();
  }

  async initializeItems(): Promise<any> {
    const documentList = await this.fs.collection('LicenseDetails')
      .valueChanges().pipe(first()).toPromise();
    this.licenseListBackup = documentList;
    return documentList;
  }


  async filterList(evt) {
    this.licenseList = this.licenseListBackup;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.licenseList = this.licenseList.filter(currentDocument => {
      if (currentDocument.name && searchTerm) {
        return (currentDocument.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}

