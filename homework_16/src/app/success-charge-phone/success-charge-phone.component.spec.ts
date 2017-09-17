import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessChargePhoneComponent } from './success-charge-phone.component';

describe('SuccessChargePhoneComponent', () => {
  let component: SuccessChargePhoneComponent;
  let fixture: ComponentFixture<SuccessChargePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessChargePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessChargePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
