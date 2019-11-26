import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinuteurComponent } from './minuteur.component';

describe('MinuteurComponent', () => {
  let component: MinuteurComponent;
  let fixture: ComponentFixture<MinuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
