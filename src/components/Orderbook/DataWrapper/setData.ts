import { SizePrice } from '../../../types/SizePrice';
import { OrderbookContextProviderType } from '../OrderbookContext';

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
    setAsksValues(asks);
  }
  if (bids) {
    setBidsValues(bids);
  }
};
