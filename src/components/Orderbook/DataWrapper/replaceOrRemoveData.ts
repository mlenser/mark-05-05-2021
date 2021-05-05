import { SizePrice } from '../../../types/SizePrice';
import { OrderbookContextProviderType } from '../OrderbookContext';

export const replaceOrRemoveData = ({
  asks,
  asksValues,
  bids,
  bidsValues,
  setAsksValues,
  setBidsValues,
}: {
  asks: SizePrice[];
  asksValues: OrderbookContextProviderType['asksValues'];
  bids: SizePrice[];
  bidsValues: OrderbookContextProviderType['bidsValues'];
  setAsksValues: OrderbookContextProviderType['setAsksValues'];
  setBidsValues: OrderbookContextProviderType['setBidsValues'];
}) => {
  console.log('data', asks, bids);
};
