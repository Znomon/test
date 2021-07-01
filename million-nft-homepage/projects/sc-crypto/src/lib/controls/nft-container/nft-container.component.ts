import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MNFTHService } from '../../services/mnfth.service';
import { ContractService } from '../../services/contract.service';

//const { create } = require('ipfs-http-client');

@Component({
  selector: 'nft-container',
  templateUrl: './nft-container.component.html',
  styleUrls: ['./nft-container.component.css']
})
export class NftContainerComponent implements OnInit {
  
  @Input() customClass: string = "";
  @Input() id: number;

  nft: any = {
    id: -1,
    customClass: ""
  };

  constructor(private MNFTService: MNFTHService,
    private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.nft = {
      id: this.id,
      customClass: this.customClass
    }
  }
  getUri(): string {
    let uri = null;
    if (this.contractService.getAccounts()) {
      uri =  this.MNFTService.getTokenUri(this.contractService.getAccounts()[0], 1);
    }
    return uri;
  }
}
