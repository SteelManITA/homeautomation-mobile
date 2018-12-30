import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { IonicHeaderDefaultComponent } from './default.component';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule,
  ],
  declarations: [
    IonicHeaderDefaultComponent,
  ],
  exports: [
    IonicHeaderDefaultComponent,
  ]
})
export class IonicHeaderDefaultModule { }
