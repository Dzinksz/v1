import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  //@ViewChild('header') header: ElementRef;

  constructor() {
    
  }
  /*
  nikola() {
    console.log(this.header.nativeElement.setAttribute('style', 'color: blue'));
  }*/
}
