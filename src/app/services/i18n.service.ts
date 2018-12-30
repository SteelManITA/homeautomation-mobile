import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';

import { Utils } from '../utils/core';

@Injectable()
export class I18nService
{

  constructor(
    protected DS: DataService,
    private http: HttpClient,
  ) {
  }

  private translateDate(date: string): string
  {
    return new Date(date).toLocaleDateString('it-IT');
  }

  private translateText(key: string): string
  {
    const text: string = this.DS.get('lang.' + key);
    return Utils.isDefined(text)
      ? text
      : key.replace(/[.-]/g, ' ');
  }

  public init(lang: string): Promise<boolean>
  {
    return new Promise(resolve => {
      this.http.get('assets/lang/' + lang + '.json').
        toPromise().
        then((response: {[key: string]: any}) => {
          this.DS.set('lang', response);
          // this.storage.set('currentLang', lang);
          resolve(true);
        }).
        catch((e: Error) => {
          console.log(e);
          this.http.get('assets/lang/it.json').
            subscribe((response: {[key: string]: any}) => {
              this.DS.set('lang', response);
              // this.storage.set('currentLang', 'it');
              resolve(true);
            });
        });
    });
  }

  public phrase(key: string): string
  {
    if (Utils.isNotDefined(key)) {
      return '';
    }

    if (Utils.isDate(key)) {
      return this.translateDate(key);
    }

    const datePosition: number = Utils.containsDate(key);
    if (datePosition === -1) {
      return this.translateText(key);
    } else {
      return this.translateText(key.substr(0, datePosition))
        + this.translateDate(key.substr(datePosition, 10))
        + this.translateText(key.substr(datePosition+10, key.length));
    }

  }
}
