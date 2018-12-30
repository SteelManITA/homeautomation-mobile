import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { I18nPipe } from './i18n.pipe';

export const pipes = [
  I18nPipe,
  ImagePipe,
];

@NgModule({
  declarations:[pipes],
  exports: [pipes]
})

export class PipesModule { }
