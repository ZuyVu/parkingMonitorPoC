import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntranceFailPage } from './entrance-fail.page';

describe('EntranceFailPage', () => {
  let component: EntranceFailPage;
  let fixture: ComponentFixture<EntranceFailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceFailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntranceFailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
