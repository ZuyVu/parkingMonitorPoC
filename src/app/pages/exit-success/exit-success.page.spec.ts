import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExitSuccessPage } from './exit-success.page';

describe('ExitSuccessPage', () => {
  let component: ExitSuccessPage;
  let fixture: ComponentFixture<ExitSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExitSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
