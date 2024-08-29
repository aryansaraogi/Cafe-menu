import { Component } from '@angular/core';

@Component({
  selector: 'app-all-day-drinks',
  templateUrl: './all-day-drinks.component.html',
  styleUrls: ['./all-day-drinks.component.css']
})
export class AllDayDrinksComponent {
  dropdownOpen = false;
  drinks = [
    { name: 'Coffee', description: 'Freshly brewed coffee.', price: '$2', image: 'assets/coffee.jpg', showDetails: false },
    // Add 9 more drinks here
  ];
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleDrink(drink: any) {
    drink.showDetails = !drink.showDetails;
  }
}

