import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import tokenAbi from "../contracts/GBFI.json";
import rewardsAbi from "../contracts/GBFIRewards.json";

import { ContractService } from './contract.service';
import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);

@Injectable({
  providedIn: 'root'
})
export class MNFTHService {
  private tokenContract: any;
  private tokenAddress: any = "0x5266a3EF8e16C3E2d46465dE9e0566d2e5140214";
  private rewardsContract: any;
  private rewardsAddress: any = "0xeA5225F59baB9094D48c45b234C13851F53e45d1";

  constructor(public contractService: ContractService,
              private http: HttpClient) {
    this.tokenContract = new window.web3.eth.Contract(tokenAbi, this.tokenAddress);
    this.rewardsContract = new window.web3.eth.Contract(rewardsAbi, this.rewardsAddress);
  }

  async mint(address: any, id: number, uri: string) {
    if (this.tokenContract.methods && this.tokenContract.methods.mintPixel) {
      const gasPrice = await window.web3.eth.getGasPrice();
      let result = await this.tokenContract.methods.mintPixel(id, '#333', uri).send({ from: address });
    }
  }

  async getTokenUri(address: any, id: any) {
    //let uri = await this.contractService.executeMethod(this.tokenContract, "tokenUri", [id]);

    let uri = await this.tokenContract.methods.tokenURI(id).call({ from: address });
    console.log(uri);
  }

  async stakeTokens(){

  }

  async stake(address: string) {
    try{
      await this._checkApproval(address, 100);
      await this._callStake(address, 100);
    }
    catch
    {
      console.log("broke");
    }
  }

  private async _callStake(address: string, amount: any) {
    var amountToSend = web3.utils.toWei(amount, "ether")
    await this.contractService.executeMethod(this.rewardsAddress, "stake", [amountToSend]);
  }

  private async _checkApproval(address: string, amount: any) {
    try {
      const allowance = await this.contractService.executeMethod(this.tokenContract, "allowance", [address, this.rewardsContract]);
      const ethAllowance = web3.utils.fromWei(allowance, "ether")

      if(parseFloat(ethAllowance) < parseFloat(amount)) {
        await this.contractService.executeMethod(this.tokenContract, "approve", [this.rewardsContract, web3.utils.toWei("999999999999999", "ether")]);
      }
    } 
    catch(error) {
      console.log(error)
      if(error.message) {
        console.log(error.message);
      }
    }
  }

  private async _getGasPrice() {
    try {
      const url = 'https://gasprice.poa.network/';
      this.http.get(url).subscribe( price => {
        if(price) {
          return price["fast"].toFixed(0);
        }
        return 0;
      });
    }
    catch 
    {
      return 0;
    }
  }
}
