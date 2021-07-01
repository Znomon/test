import { Component, OnInit, Input } from '@angular/core';
import { MNFTHService } from '../../services/mnfth.service';
import { ContractService } from '../../services/contract.service';

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
  constructor(private MNFTService: MNFTHService,
              private contractService: ContractService) { }

  ngOnInit(): void {
  }

  mint(): void {
    this.minted = true;
    //this.MNFTService.getSymbol(this.contractService.getAccounts()[0]);
    this.MNFTService.mint(this.contractService.getAccounts()[0], 1, 'https://i.imgur.com//byrZHSy.jpeg');
    //this.MNFTService.getColorArray(this.contractService.getAccounts()[0]);
  }

  buy(): void {
    this.buyNow = false;
   this.owned = true;
  }
}
