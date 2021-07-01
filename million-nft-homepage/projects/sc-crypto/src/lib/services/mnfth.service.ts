import { Injectable } from '@angular/core';
import tokenAbi from "../contracts/MNFTH.json";
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root'
})
export class MNFTHService {

  private tokenContract: any;
  private tokenAddress: any = "0xF4931097045083696BAf183b9ac104b007d5c43e";

  constructor(public contractService: ContractService) {
    this.tokenContract = new window.web3.eth.Contract(tokenAbi, this.tokenAddress);
  }

  async mint(address: any, id: number, uri: string) {
    if (this.tokenContract.methods && this.tokenContract.methods.mintPixel) {
      const gasPrice = await window.web3.eth.getGasPrice();
      let result = await this.tokenContract.methods.mintPixel(id, '#333', uri).send({ from: address });
    }
  }

  //async getPixels(): any {
  //  return result;
  //}

  async getSymbol(address: any ) {
    let symbol = await this.tokenContract.methods.symbol().call({ from: address });
    console.log(symbol);
  }

  async getColorArray(address: any) {
    let colorArray = await this.tokenContract.methods.colorArray.call({ from: address });
    console.log(colorArray);
  }

  async getTokenUri(address: any, id: any) {
    //let uri = await this.contractService.executeMethod(this.tokenContract, "tokenUri", [id]);

    let uri = await this.tokenContract.methods.tokenURI(id).call({ from: address });
    console.log(uri);
  }
}
