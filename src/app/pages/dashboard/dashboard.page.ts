import { Component, OnInit } from '@angular/core';
import { BranchesComponent } from 'src/app/components/branches/branches.component';
import { Departments } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers:[BranchService]
})
export class DashboardPage implements OnInit {
  sliderConfig = {
    spaceBetween :4,
    centeredSlides:false,
    slidesPerView:1


  }

  departments : Departments[];
 

  constructor(private branchService: BranchService,
    private router:Router) { }

  ngOnInit() {
    this.departments = this.branchService.getDepartments();
  }

  browseDocuments(){
    this.router.navigate(['/browse-papers'])
  }

}
