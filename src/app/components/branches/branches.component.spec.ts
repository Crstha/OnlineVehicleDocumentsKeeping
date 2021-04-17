import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BranchesComponent } from './branches.component';

describe('BranchesComponent', () => {
  let component: BranchesComponent;
  let fixture: ComponentFixture<BranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
