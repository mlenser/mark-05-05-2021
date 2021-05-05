import { SizePrice } from '../types/SizePrice';
import { ORDERBOOK_ROWS_TO_SHOW } from '../constants/constants';

export const lastValues = (values: SizePrice[]) =>
  values.slice(Math.max(values.length - ORDERBOOK_ROWS_TO_SHOW, 0));
