import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { IonicDeviceDefaultComponent } from './default.component';
import { IonicAirConditionerComponent } from './air-conditioner/component';

const COMPONENTS: any[] = [
  IonicDeviceDefaultComponent,
  IonicAirConditionerComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    IonicModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class IonicDeviceDefaultModule { }