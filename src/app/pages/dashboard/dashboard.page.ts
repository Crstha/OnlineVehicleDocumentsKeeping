import { Component, OnInit } from '@angular/core';
import { BranchesComponent } from 'src/app/components/branches/branches.component';
import { Departments } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch.service';

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
 

  constructor(private branchService: BranchService) { }

  ngOnInit() {
    this.departments = this.branchService.getDepartments();
  }

}
