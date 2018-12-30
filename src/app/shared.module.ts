import { PipesModule } from './pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule,
    PipesModule,
  ],
  exports: [
    PipesModule,
  ]
})

export class SharedModule { }
