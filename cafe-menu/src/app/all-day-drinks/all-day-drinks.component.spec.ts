import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDayDrinksComponent } from './all-day-drinks.component';

describe('AllDayDrinksComponent', () => {
  let component: AllDayDrinksComponent;
  let fixture: ComponentFixture<AllDayDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDayDrinksComponent]
    });
    fixture = TestBed.createComponent(AllDayDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
