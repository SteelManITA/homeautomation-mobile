import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { IonicCardIconDefaultModule } from './card-icon/module';
import { IonicDeviceDefaultModule } from './device/module';

const COMPONENTS: any[] = [
  IonicCardIconDefaultModule,
  IonicDeviceDefaultModule,
]

@NgModule({
  imports: [
    IonicModule,
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
