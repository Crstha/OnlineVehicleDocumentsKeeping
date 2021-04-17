import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsurancepaperPage } from './insurancepaper.page';

describe('InsurancepaperPage', () => {
  let component: InsurancepaperPage;
  let fixture: ComponentFixture<InsurancepaperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancepaperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsurancepaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
