import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { IonicCardIconDefaultComponent } from './default.component';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule,
  ],
  declarations: [
    IonicCardIconDefaultComponent,
  ],
  exports: [
    IonicCardIconDefaultComponent,
  ]
})
export class IonicCardIconDefaultModule { }
