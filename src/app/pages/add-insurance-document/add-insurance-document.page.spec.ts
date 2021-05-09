import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddInsuranceDocumentPage } from './add-insurance-document.page';

describe('AddInsuranceDocumentPage', () => {
  let component: AddInsuranceDocumentPage;
  let fixture: ComponentFixture<AddInsuranceDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInsuranceDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInsuranceDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
