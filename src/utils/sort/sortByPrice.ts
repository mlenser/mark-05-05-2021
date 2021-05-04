import { SizePrice } from '../../types/SizePrice';

export const sortByPriceHighFirst = (a: SizePrice, b: SizePrice): number =>
  b[0] - a[0];

export const sortByPriceLowFirst = (a: SizePrice, b: SizePrice): number =>
  a[0] - b[0];
