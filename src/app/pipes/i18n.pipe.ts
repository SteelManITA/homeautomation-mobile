import { Pipe, PipeTransform } from '@angular/core';

import { I18nService } from '../services/i18n.service';

@Pipe({
  name: 'i18n'
})
export class I18nPipe
  implements PipeTransform
{
  private static MAX_CHAIN_LENGTH: number = 5;
  private static current_ring: number;

  constructor(
    protected i18n: I18nService
  ) {
  }

  private translate(val: string): string {
    let trans = this.i18n.phrase(val);
    if (I18nPipe.current_ring < I18nPipe.MAX_CHAIN_LENGTH) {
      const search: string = ' | i18n';
      const pipePos: number = trans.lastIndexOf(search);
      if (pipePos !== -1 && pipePos === trans.length - search.length) {
        trans = this.translate(trans.substr(0, pipePos));
      }
      ++I18nPipe.current_ring;
    } else {
      console.error('MAX_CHAIN_LENGTH exceeded');
    }
    return trans;
  }

  transform(value: string): string
  {
    I18nPipe.current_ring = 0;
    return this.translate(value);
  }
}
