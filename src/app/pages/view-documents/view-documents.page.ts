import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents.page.html',
  styleUrls: ['./view-documents.page.scss'],
})
export class ViewDocumentsPage implements OnInit {
  items: Observable<any[]>;

  constructor(
    private afs: AngularFireStorage,
    private afd: AngularFireDatabase
  ) { 
    
  }

  ngOnInit() {
  }

  
}
