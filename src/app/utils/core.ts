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

  static isObject(value: any): boolean
  {
    return typeof value === 'object';
  }

  static isTrueObject(value: any): boolean
  {
    return Utils.isDefined(value) && Utils.isObject(value);
  }
}
