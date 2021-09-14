import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { ScCryptoComponent } from './sc-crypto.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';

import { ConnectWalletComponent } from './controls/connect-wallet/connect-wallet.component';
import { FarmingComponent } from './controls/farming/farming.component';
import { NftInformationDialogComponent } from './controls/nft-information-dialog/nft-information-dialog.component';
import { NftContainerComponent } from './controls/nft-container/nft-container.component';

@NgModule({
  declarations: [
    ScCryptoComponent, 
    ConnectWalletComponent,
    FarmingComponent,
    NftInformationDialogComponent,
    NftContainerComponent,
    FarmingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    ClipboardModule,
    FlexModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [
    ScCryptoComponent, 
    MatButtonModule,
    MatMenuModule,
    ClipboardModule,
    FlexModule,
    FlexLayoutModule,
    ConnectWalletComponent,
    FarmingComponent,
    NftInformationDialogComponent,
    NftContainerComponent
  ],
  entryComponents: [
    ConnectWalletComponent,
    FarmingComponent,
    NftInformationDialogComponent,
    NftContainerComponent
  ]
})
export class ScCryptoModule { }
