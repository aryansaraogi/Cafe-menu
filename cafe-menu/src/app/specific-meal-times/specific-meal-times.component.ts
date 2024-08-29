import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-meal-times',
  templateUrl: './specific-meal-times.component.html',
  styleUrls: ['./specific-meal-times.component.css']
})
export class SpecificMealTimesComponent implements OnInit {
  meals = [
    { name: 'Omelette', description: 'Fluffy omelette.', price: '$4', image: 'assets/omelette.jpg', showDetails: false },
    // Add 29 more items here
  ];

  displayedMeals: any[] = [];

  ngOnInit() {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 11) {
      this.displayedMeals = this.meals.slice(0, 10); // Breakfast
    } else if (currentHour >= 13 && currentHour < 16) {
      this.displayedMeals = this.meals.slice(10, 20); // Lunch
    } else if (currentHour >= 19 && currentHour < 21) {
      this.displayedMeals = this.meals.slice(20, 30); // Dinner
    } else {
      this.displayedMeals = []; // Not available
    }
  }

  toggleMeal(meal: any) {
    meal.showDetails = !meal.showDetails;
  }
}
