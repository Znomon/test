import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.css']
})
export class ConnectWalletComponent implements OnInit {
  activeAccount: string = '';
  balance: string = '';
  accounts: any = [];
  accountStatusSource: Subscription;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.accountStatusSource = this.contractService.accountStatusSource$.subscribe(accounts => {
      this.changeAccount(accounts);
    });
  }
  connect() {
    this.contractService.openConnectWalletModal();
  }
  changeAccount(accounts: any){
    if (accounts) {
      this.accounts = accounts;
      this.activeAccount = accounts[0];
      this.contractService.getBalance().subscribe( result => {
        this.balance = result;
      });
    }
    else {
      this.accounts = [];
      this.activeAccount = "";
      this.balance = "";
    }
  }
  logout(){
    this.contractService.onDisconnect();
  }
}
