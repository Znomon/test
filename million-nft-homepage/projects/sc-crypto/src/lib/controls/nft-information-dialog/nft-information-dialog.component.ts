import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nft-information-dialog',
  templateUrl: './nft-information-dialog.component.html',
  styleUrls: ['./nft-information-dialog.component.css']
})
export class NftInformationDialogComponent implements OnInit {

  @Input() id: number;

  minted: boolean = false;
  buyNow: boolean = true;
  owned: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mint(): void {
    this.minted = true;
  }

  buy(): void {
    this.buyNow = false;
   this.owned = true;
  }
}
