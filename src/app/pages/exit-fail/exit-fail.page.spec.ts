import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExitFailPage } from './exit-fail.page';

describe('ExitFailPage', () => {
  let component: ExitFailPage;
  let fixture: ComponentFixture<ExitFailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitFailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExitFailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
