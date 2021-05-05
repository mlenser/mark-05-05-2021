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

const removeValue = ({
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

export const replaceValueByPrice = ({
  indexToReplace,
  newValue,
  values,
}: {
  indexToReplace: number;
  newValue: SizePrice;
  values: AsksValues | BidsValues;
}) => Object.assign([], values, { [indexToReplace]: newValue });

export const addValue = ({
  newValue,
  values,
}: {
  newValue: SizePrice;
  values: AsksValues | BidsValues;
}) => [...values, newValue];

const replaceOrAddValue = ({
  adjustValues,
  value,
  values,
}: {
  adjustValues: SetAsksValues | SetBidsValues;
  value: SizePrice;
  values: AsksValues | BidsValues;
}) => {
  const existingValue = values.find((val) => val[0] === value[0]);
  if (existingValue) {
    const indexToReplace = values.indexOf(existingValue);
    if (indexToReplace > -1) {
      const newValues = replaceValueByPrice({
        indexToReplace,
        newValue: value,
        values,
      });
      if (newValues) {
        adjustValues(newValues);
      }
    }
  } else {
    const newValues = addValue({
      newValue: value,
      values,
    });
    if (newValues) {
      adjustValues(newValues);
    }
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
    } else {
      replaceOrAddValue({
        adjustValues: setAsksValues,
        value: ask,
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
    } else {
      replaceOrAddValue({
        adjustValues: setBidsValues,
        value: bid,
        values: bidsValues,
      });
    }
  });
};
