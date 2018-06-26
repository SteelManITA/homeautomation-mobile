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
