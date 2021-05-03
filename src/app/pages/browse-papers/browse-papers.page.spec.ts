import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowsePapersPage } from './browse-papers.page';

describe('BrowsePapersPage', () => {
  let component: BrowsePapersPage;
  let fixture: ComponentFixture<BrowsePapersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsePapersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowsePapersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
