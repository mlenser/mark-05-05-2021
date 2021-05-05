import { SizePrice } from '../types/SizePrice';
import { ORDERBOOK_ROWS_TO_SHOW } from '../constants/constants';

export const topValues = (values: SizePrice[]) =>
  values.slice(0, ORDERBOOK_ROWS_TO_SHOW);
