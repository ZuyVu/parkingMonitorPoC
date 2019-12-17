import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntranceSuccessPage } from './entrance-success.page';

describe('EntranceSuccessPage', () => {
  let component: EntranceSuccessPage;
  let fixture: ComponentFixture<EntranceSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntranceSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
