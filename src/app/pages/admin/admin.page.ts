import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  addDocuments(){
    this.router.navigate(['/add-documents']);
  }

  addBluebookDocuments(){
    this.router.navigate(['/add-bluebook-document']);
  }
  addInsuranceDocuments(){
    this.router.navigate(['/add-insurance-document']);
  }

}
