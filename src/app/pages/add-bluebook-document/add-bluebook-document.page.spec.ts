import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBluebookDocumentPage } from './add-bluebook-document.page';

describe('AddBluebookDocumentPage', () => {
  let component: AddBluebookDocumentPage;
  let fixture: ComponentFixture<AddBluebookDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBluebookDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBluebookDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
