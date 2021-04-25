import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nft-container',
  templateUrl: './nft-container.component.html',
  styleUrls: ['./nft-container.component.css']
})
export class NftContainerComponent implements OnInit {
  
  @Input() customClass: string = "";
  @Input() id: number;
  @Input() size: number = 0;

  nfts: any;

  constructor() {
  }

  ngOnInit(): void {
    this.nfts = Array(this.size).fill(0).map((x, i) => i);
  }
}
