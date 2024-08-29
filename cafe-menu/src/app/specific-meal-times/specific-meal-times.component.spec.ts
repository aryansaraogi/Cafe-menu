import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificMealTimesComponent } from './specific-meal-times.component';

describe('SpecificMealTimesComponent', () => {
  let component: SpecificMealTimesComponent;
  let fixture: ComponentFixture<SpecificMealTimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificMealTimesComponent]
    });
    fixture = TestBed.createComponent(SpecificMealTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
