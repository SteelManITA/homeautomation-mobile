export interface Api
{
  URL: string;
  VER: string;
  LOGIN: string;
  LOGIN_REFRESH: string;
  LOGOUT: string;
  SIGNUP: string;
  SEND_ERRORS?: boolean;
}

export interface Environment
{
  PRODUCTION: boolean;
  API?: Api;
}

export class Utils
{
  static isDefined(value: any): boolean
  {
    return value !== undefined && value !== null;
  }

  static isNotDefined(value: any): boolean
  {
    return value === undefined || value === null;
  }

  static isDate(string: string): boolean
  {
    return !isNaN(new Date(string).getTime())
      ? true
      : false;
  }

  static containsDate(string: string): number
  {
    return string.search(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g);
  }

  static isObject(value: any): boolean
  {
    return typeof value === 'object';
  }

  static isTrueObject(value: any): boolean
  {
    return Utils.isDefined(value) && Utils.isObject(value);
  }

  static imageExists(url: string): Promise<boolean>
  {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }
}
