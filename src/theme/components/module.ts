import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '@app/shared.module';

import { IonicCardIconDefaultModule } from './card-icon/module';
import { IonicDeviceDefaultModule } from './device/module';

const COMPONENTS: any[] = [
  IonicCardIconDefaultModule,
  IonicDeviceDefaultModule,
]

@NgModule({
  imports: [
    IonicModule,
    SharedModule,
    ...COMPONENTS,
  ],
  exports: [
    IonicModule,
    ...COMPONENTS,
  ],
  providers: [
  ]
})
export class ComponentsModule {}
