import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CommonComponent } from './common.component';
import { ToolbarComponent } from './controls/toolbar/toolbar.component';
import { FooterComponent } from './controls/footer/footer.component';
import { ScCryptoModule } from 'sc-crypto';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CommonComponent, 
    ToolbarComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    ScCryptoModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexModule,
    FlexLayoutModule
  ],
  exports: [
    CommonComponent, 
    ToolbarComponent, 
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexModule,
    FlexLayoutModule
  ],
  entryComponents: [
    ToolbarComponent, 
    FooterComponent
  ]
})
export class CommonComponentsModule { }
