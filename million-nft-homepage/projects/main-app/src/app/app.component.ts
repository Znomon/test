import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = {};

  constructor() {
    this.data.title = "Million NFT Homepage";
    this.data.logo = '';
  }
  toggleSideNav() {
    //This would toggle sidenav
  }
}
