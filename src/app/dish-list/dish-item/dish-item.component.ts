import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Dish } from 'src/app/dish';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit, OnChanges {

  @Input() dish: Dish;
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dish);
  }

  ngOnInit(): void {
  }

  

}
