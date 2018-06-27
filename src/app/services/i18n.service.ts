import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';

import { Utils } from '../utils/core';

@Injectable()
export class I18nService
{

  constructor(
    protected DS: DataService,
    private http: HttpClient
  ) {
  }

  public init(): Promise<boolean>
  {
    return new Promise(resolve => {
      this.http.get("assets/lang/it.json").
        subscribe((response: {[key: string]: any}) => {
          this.DS.set('lang', response);
          resolve(true);
        });
    });
  }

  public phrase(key: string): string
  {
    if (Utils.isNotDefined(key)) {
      return '';
    }
    const text: string = this.DS.get('lang.' + key);
    return Utils.isDefined(text)
      ? text
      : key.replace(/[.-]/g, ' ');
  }
}
