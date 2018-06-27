import { Pipe, PipeTransform } from '@angular/core';

import { I18nService } from '../services/i18n.service';

@Pipe({
  name: 'i18n'
})
export class I18nPipe
  implements PipeTransform
{

  constructor(
    protected i18n: I18nService
  ) {
  }

  transform(value: string): string
  {
    return this.i18n.phrase(value);
  }
}
