// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Copialo e crea environment.ts
import { Environment } from '@app/utils';

export const ENV: Environment = {
  PRODUCTION: false,
  API: {
    URL: '127.0.0.1',
    VER: 'v1',
    LOGIN: 'auth/login',
    LOGIN_REFRESH: 'auth/login/refresh',
    LOGOUT: 'auth/logout',
    SIGNUP: 'users',
    SEND_ERRORS: false,
  },
};
