import { SizePrice } from '../../../types/SizePrice';
import { OrderbookContextProviderType } from '../OrderbookContext';
import {
  sortByPriceHighFirst,
  sortByPriceLowFirst,
} from '../../../utils/sort/sortByPrice';

export const setData = ({
  asks,
  bids,
  setAsksValues,
  setBidsValues,
}: {
  asks: SizePrice[];
  bids: SizePrice[];
  setAsksValues: OrderbookContextProviderType['setAsksValues'];
  setBidsValues: OrderbookContextProviderType['setBidsValues'];
}) => {
  if (asks) {
    setAsksValues(asks.sort(sortByPriceLowFirst));
  }
  if (bids) {
    setBidsValues(bids.sort(sortByPriceHighFirst));
  }
};
