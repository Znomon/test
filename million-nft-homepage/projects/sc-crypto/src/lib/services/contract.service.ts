import { Injectable } from '@angular/core';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Subject, BehaviorSubject, Observable } from 'rxjs';

const web3 = new Web3(Web3.givenProvider);

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private web3: any;
  private provider: any;
  private accounts: any;
  Web3Modal

  private accountStatusSourceRef = new BehaviorSubject<any>(null);
  accountStatusSource$ = this.accountStatusSourceRef.asObservable();
  accountConnected(account: any) {
      this.accountStatusSourceRef.next(account);
  }

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      window.web3 = this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask'
      );
    }

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "d3c9e503258942aabb9d06873ab004cf" // required
        }
      }
    };

    this.Web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  async connectAccount(){
    if('enable' in this.web3.currentProvider){
      await this.web3.currentProvider.enable();
      this.accounts = await this.web3.eth.getAccounts();
      this.accountConnected(this.accounts);
    }
  }
  
  async openConnectWalletModal() {
    try {
      this.Web3Modal.clearCachedProvider();
      this.provider = await this.Web3Modal.connect(); // set provider
      window.web3 = this.web3 = new Web3(this.provider); // create web3 instance
      this.accounts = await this.web3.eth.getAccounts(); 
      this.accountConnected(this.accounts);
    } catch(e) {
      console.log("Could not connect to provider");
    }
  }

  getBalance(): Observable<string> {
    return new Observable(observer => {
    let balance: string = "";
      web3.eth.getBalance(this.accounts[0], function(err, result) {
        if (err) {
          console.log(err);
        } else {
          balance = result;
        }
        observer.next(window.web3.utils.fromWei(balance, "ether") + " ETH");
      });
    });
  }

  async onDisconnect() {  
    // TODO: Which providers have close method?
    if(this.provider.close) {
      await this.provider.close();
  
      // If the cached provider is not cleared,
      // WalletConnect will default to the existing session
      // and does not allow to re-scan the QR code with a new wallet.
      // Depending on your use case you may want or want not his behavir.
      await this.Web3Modal.clearCachedProvider();
      this.provider = null;
    }
  }
  
  getAccounts(): any{
    return this.accounts;
  }
}