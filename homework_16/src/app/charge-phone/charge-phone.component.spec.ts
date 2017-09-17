import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargePhoneComponent } from './charge-phone.component';

describe('ChargePhoneComponent', () => {
  let component: ChargePhoneComponent;
  let fixture: ComponentFixture<ChargePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
