import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '@app/shared.module';

import { IonicDeviceDefaultComponent } from './default.component';
import { IonicAirConditionerComponent } from './air-conditioner/component';
import { IonicLightComponent } from './light/component';

const COMPONENTS: any[] = [
  IonicDeviceDefaultComponent,
  IonicAirConditionerComponent,
  IonicLightComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    IonicModule,
    SharedModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class IonicDeviceDefaultModule { }
