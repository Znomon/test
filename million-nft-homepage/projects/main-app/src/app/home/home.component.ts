import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numbers: any;

  constructor() {
    this.numbers = Array(3).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
  }

}
