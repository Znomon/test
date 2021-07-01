import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numbers: any;

  constructor() {
    this.numbers = Array(1).fill(1).map((x, i) => i);
  }

  ngOnInit(): void {
  }

}
