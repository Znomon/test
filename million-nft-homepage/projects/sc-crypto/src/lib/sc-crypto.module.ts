import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ScCryptoComponent } from './sc-crypto.component';

import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { ConnectWalletComponent } from './controls/connect-wallet/connect-wallet.component';

import { NftInformationDialogComponent } from './controls/nft-information-dialog/nft-information-dialog.component';

@NgModule({
  declarations: [
    ScCryptoComponent, 
    ConnectWalletComponent, NftInformationDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    ClipboardModule
  ],
  exports: [
    ScCryptoComponent, 
    MatButtonModule,
    MatMenuModule,
    ClipboardModule,
    ConnectWalletComponent,
    NftInformationDialogComponent
  ],
  entryComponents: [
    ConnectWalletComponent,
    NftInformationDialogComponent
  ]
})
export class ScCryptoModule { }
