import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[] = [];
  selectedDish: Dish;

  constructor() { }

  ngOnInit(): void {
    this.dishes.push({
      id: this.dishes.length + 1,
      name: "Pizza Carbonara",
      type: "Italian",
      imageUrl: "https://i2-prod.walesonline.co.uk/incoming/article18439270.ece/ALTERNATES/s1200b/0_Carbonara.jpg",
      price: 720
    });

    this.dishes.push({
      id: this.dishes.length + 1,
      name: "Cheeseburger",
      type: "American",
      imageUrl: "https://media.longhornsteakhouse.com/en_us/images/product/kids-burger-918x568-dpv.jpg",
      price: 410
    });

    this.dishes.push({
      id: this.dishes.length + 1,
      name: "Pasta",
      type: "Italian",
      imageUrl: "https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg",
      price: 1100
    });
  }

  setSelectedDish(dish: Dish) {
    this.selectedDish = dish;
  }

}
