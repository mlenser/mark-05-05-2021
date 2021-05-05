import { SizePrice } from '../../../types/SizePrice';
import { OrderbookContextProviderType } from '../OrderbookContext';

type AsksValues = OrderbookContextProviderType['asksValues'];
type BidsValues = OrderbookContextProviderType['bidsValues'];
type SetAsksValues = OrderbookContextProviderType['setAsksValues'];
type SetBidsValues = OrderbookContextProviderType['setBidsValues'];

export const removeValueByPrice = ({
  removePrice,
  values,
}: {
  removePrice: number;
  values: AsksValues | BidsValues;
}) => values.filter((value) => value[0] !== removePrice);

export const removeValue = ({
  adjustValues,
  removePrice,
  values,
}: {
  adjustValues: SetAsksValues | SetBidsValues;
  removePrice: number;
  values: AsksValues | BidsValues;
}) => {
  const newValues = removeValueByPrice({
    removePrice,
    values,
  });
  if (newValues) {
    adjustValues(newValues);
  }
};

export const replaceOrRemoveValues = ({
  asks,
  asksValues,
  bids,
  bidsValues,
  setAsksValues,
  setBidsValues,
}: {
  asks: SizePrice[];
  asksValues: AsksValues;
  bids: SizePrice[];
  bidsValues: BidsValues;
  setAsksValues: SetAsksValues;
  setBidsValues: SetBidsValues;
}) => {
  console.log('data', asks, bids);
  asks?.forEach((ask) => {
    if (ask[1] === 0) {
      removeValue({
        adjustValues: setAsksValues,
        removePrice: ask[0],
        values: asksValues,
      });
    }
  });
  bids?.forEach((bid) => {
    if (bid[1] === 0) {
      removeValue({
        adjustValues: setBidsValues,
        removePrice: bid[0],
        values: bidsValues,
      });
    }
  });
};
