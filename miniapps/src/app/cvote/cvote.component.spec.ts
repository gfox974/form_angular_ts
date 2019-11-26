import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvoteComponent } from './cvote.component';

describe('CvoteComponent', () => {
  let component: CvoteComponent;
  let fixture: ComponentFixture<CvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
