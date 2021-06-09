import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BluebookPage } from './bluebook.page';

describe('BluebookPage', () => {
  let component: BluebookPage;
  let fixture: ComponentFixture<BluebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BluebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
