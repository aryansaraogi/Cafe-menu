import { Component } from '@angular/core';

@Component({
  selector: 'app-all-day-meals',
  templateUrl: './all-day-meals.component.html',
  styleUrls: ['./all-day-meals.component.css']
})
export class AllDayMealsComponent {
  dropdownOpen = false;

  meals = [
    { name: 'Pancakes', description: 'Delicious pancakes.', price: '$5', image: 'assets/pancakes.jpg', showDetails: false },
    // Add 9 more meals here
  ];
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMeal(meal: any) {
    meal.showDetails = !meal.showDetails;
  }
}
