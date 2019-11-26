import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpnComponent } from './rpn.component';

describe('RpnComponent', () => {
  let component: RpnComponent;
  let fixture: ComponentFixture<RpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
