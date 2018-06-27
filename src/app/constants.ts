export interface ConstantsAttr
{
  APP_VERSION: string;
  LOADER: {
    MIN_LOADING_TIME: number;
  };
}

export const Constants: ConstantsAttr = {
  APP_VERSION: '0.0.1',
  LOADER: {
    MIN_LOADING_TIME: 5000,
  },
};
