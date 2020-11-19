import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerButtonComponent } from './lower-button.component';

describe('LowerButtonComponent', () => {
  let component: LowerButtonComponent;
  let fixture: ComponentFixture<LowerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
