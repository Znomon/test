import { Component, OnInit } from '@angular/core';

import { MNFTHService } from '../../services/mnfth.service';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'farming',
  templateUrl: './farming.component.html',
  styleUrls: ['./farming.component.css']
})
export class FarmingComponent implements OnInit {

  //#region fields

  farms: farm[] = [];

  //#endregion

  //#region constructor and deconstructor

  constructor(private MNFTService: MNFTHService,
    private contractService: ContractService) { 
    this.farms.push(
      {
        active: false,
        description: "Eth/Test LP",
        name : "uno"
      },
      {
        active: false,
        description: "Test",
        name : "dos"
      },
      {
        active: false,
        description: "USDC/Test LP",
        name : "tres"
      });
  }
  
  //#endregion

  //#region public functions

  ngOnInit(): void {
 
  }

  addToFarm(farm: farm){
    farm.active = true;
    this.MNFTService.stake(this.contractService.getAccounts()[0]);
  }

  Remove(farm: farm) {
    farm.active = false;
    console.log("Remove")
  }

  //#endregion

}

/* farm interface */
export interface farm {
  active: boolean;
  description: string;
  name: string;
}
