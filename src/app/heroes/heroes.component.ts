import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  text: string = "Angular";
  colors = ['yellow', 'red', 'blue', 'purple'];
  boja: string = this.colors[0];

  constructor() { }

  deleteText() {
    this.text = "";
  }

  randomColor() {
    const i = Math.floor(Math.random() * this.colors.length);
    this.boja = this.colors[i];
  }

  ngOnInit(): void {
  }

}
