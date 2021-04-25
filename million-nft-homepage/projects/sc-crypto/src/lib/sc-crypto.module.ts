import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ScCryptoComponent } from './sc-crypto.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';

import { ConnectWalletComponent } from './controls/connect-wallet/connect-wallet.component';
import { NftInformationDialogComponent } from './controls/nft-information-dialog/nft-information-dialog.component';
import { NftContainerComponent } from './controls/nft-container/nft-container.component';

@NgModule({
  declarations: [
    ScCryptoComponent, 
    ConnectWalletComponent,
    NftInformationDialogComponent,
    NftContainerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    ClipboardModule,
    FlexModule,
    FlexLayoutModule
  ],
  exports: [
    ScCryptoComponent, 
    MatButtonModule,
    MatMenuModule,
    ClipboardModule,
    FlexModule,
    FlexLayoutModule,
    ConnectWalletComponent,
    NftInformationDialogComponent,
    NftContainerComponent
  ],
  entryComponents: [
    ConnectWalletComponent,
    NftInformationDialogComponent,
    NftContainerComponent
  ]
})
export class ScCryptoModule { }
