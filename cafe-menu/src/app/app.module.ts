import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllDayMealsComponent } from './all-day-meals/all-day-meals.component';
import { AllDayDrinksComponent } from './all-day-drinks/all-day-drinks.component';
import { SpecificMealTimesComponent } from './specific-meal-times/specific-meal-times.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDayMealsComponent,
    AllDayDrinksComponent,
    SpecificMealTimesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
