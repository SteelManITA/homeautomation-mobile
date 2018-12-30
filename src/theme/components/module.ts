import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '@app/shared.module';

import { IonicCardIconDefaultModule } from './card-icon/module';
import { IonicDeviceDefaultModule } from './device/module';
import { IonicHeaderDefaultModule } from './header/module';

const COMPONENTS: any[] = [
  IonicCardIconDefaultModule,
  IonicDeviceDefaultModule,
  IonicHeaderDefaultModule,
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
