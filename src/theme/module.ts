import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/module';
import { ViewsModule } from './views/module';

@NgModule({
  declarations: [
  ],
  imports: [
    ComponentsModule,
    ViewsModule,
  ],
  exports: [
    ComponentsModule,
    ViewsModule,
  ]
})
export class ThemeModule {}
