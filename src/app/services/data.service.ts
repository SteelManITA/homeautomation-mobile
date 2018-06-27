import { Injectable } from '@angular/core';
import { Utils } from '../utils/core';

@Injectable()
export class DataService
{
  protected data: {[key: string]: any} = {};

  constructor(
  ) {
  }

  protected getDataChild(parent: any, key: string): {[key: string]: any}
  {
    if (Utils.isNotDefined(parent[key])) {
      parent[key] = {};
    }
    return parent[key];
  }

  public set(key: string, value: any): DataService
  {
    if (Utils.isNotDefined(key)) {
      return;
    }

    const keys: string[] = key.split('.');
    let parent: {[key: string]: any} = this.data;
    for (let i: number = 0; i < keys.length - 1; ++i) {
      parent = this.getDataChild(parent, keys[i]);
    }
    parent[keys[keys.length-1]] = value;

    return this;
  }

  public get(key?: string): any
  {
    if (Utils.isNotDefined(key)) {
      return this.data;
    }

    const keys: string[] = key.split('.');
    let d: {[key: string]: any} = this.data;
    for (let i: number = 0; i < keys.length; ++i) {
      if (Utils.isDefined(d[keys[i]])) {
        d = d[keys[i]];
      } else {
        return undefined;
      }
    }
    return d;
  }

  public remove(key: string): DataService
  {
    const keys: string[] = key.split('.');
    if (keys.length === 1) {
      this.data[key] = undefined;
    } else {
      const parentKey: string = keys.slice(0, keys.length-1).join('.');
      const lastKey: string = keys[keys.length-1];
      const data: any = this.get(parentKey);
      if (Utils.isDefined(data)) {
        data[lastKey] = undefined;
      }
    }
    return this;
  }
}
