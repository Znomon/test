import { Injectable } from '@angular/core';

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { BehaviorSubject, Observable } from 'rxjs';

/* const web3 = new Web3(window.web3.currentProvider); */
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  //#region fields
  private provider: any;
  private accounts: any;
  Web3Modal

  private config: any;
  private methods: any;
  private events: any;

  private accountStatusSourceRef = new BehaviorSubject<any>(null);
  accountStatusSource$ = this.accountStatusSourceRef.asObservable();

  //#endregion

  //#region constructor and deconstructors

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      window.web3 = new Web3(window.web3.currentProvider);
      this.connectAccount();
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

  //#endregion

  //#region public methods

  accountConnected(account: any) {
    this.accountStatusSourceRef.next(account);
  }

  async connectAccount(){
    if('enable' in window.web3.currentProvider){
      //await window.web3.currentProvider.enable();
      this.accounts = await window.web3.eth.getAccounts();
      this.accountConnected(this.accounts);
    }
  }

  async executeMethod(contract, name, args) {
    const config = this.config.getConfig();
    const gasPrice = await window.web3.eth.getGasPrice();
    const data = contract.methods[name](...args);
    const encode = data.encodeABI();
    const nonce = await window.web3.eth.getTransactionCount(
      config.public_key,
      'pending'
    );
    const rawTx: any = {
      nonce,
      gasPrice,
      gasLimit: window.web3.utils.toHex('300000'),
      to: contract.options.address,
      from: config.public_key,
      value: window.web3.utils.toHex(window.web3.utils.toWei('0', 'ether')),
      chainId: config.network,
      data: encode
    };
    const gas = await data.estimateGas(rawTx);
    rawTx['gas'] = gas;

    const signTransaction = await window.web3.eth.accounts.signTransaction(
      rawTx,
      config.private_key
    );

    const result = await window.web3.eth.sendSignedTransaction(
      signTransaction.rawTransaction
    );
    // const result2 = await this.web3.getTransactionFromBlock(result.transactionHash);
    return result;
  }

  getAccounts(): any {
    return this.accounts;
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

  getEvents() {
    const config = this.config.getConfig();

    this.events = (config.contract.doc as any).abi.reduce((acc, actual) => {
      if (actual.type === 'event') {
        acc.push(actual);
      }
      return acc;
    }, []);
    return this.events;
  }

  getMethods() {
    const config = this.config.getConfig();
    this.methods = (config.contract.doc as any).abi.reduce((acc, actual) => {
      if (actual.type === 'function') {
        acc.push(actual);
      }
      return acc;
    }, []);
    return this.methods;
  }

  async openConnectWalletModal() {
    try {
      this.Web3Modal.clearCachedProvider();
      this.provider = await this.Web3Modal.connect(); // set provider
      window.web3 = window.web3 = new Web3(this.provider); // create web3 instance
      this.accounts = await window.web3.eth.getAccounts(); 
      this.accountConnected(this.accounts);
    } catch(e) {
      console.log("Could not connect to provider");
    }
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

  //#endregion
  
  //#region private methods
  //#endregion

}
