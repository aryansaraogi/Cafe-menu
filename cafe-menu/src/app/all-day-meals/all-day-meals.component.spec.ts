import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDayMealsComponent } from './all-day-meals.component';

describe('AllDayMealsComponent', () => {
  let component: AllDayMealsComponent;
  let fixture: ComponentFixture<AllDayMealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDayMealsComponent]
    });
    fixture = TestBed.createComponent(AllDayMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
