import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysChosenComponent } from './toys-chosen.component';

describe('ToysChosenComponent', () => {
  let component: ToysChosenComponent;
  let fixture: ComponentFixture<ToysChosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysChosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysChosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
