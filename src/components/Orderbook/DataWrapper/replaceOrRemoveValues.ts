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
  value,
  values,
}: {
  value: SizePrice;
  values: AsksValues | BidsValues;
}) => {
  const existingValue = values.find((val) => val[0] === value[0]);
  if (existingValue) {
    const indexToReplace = values.indexOf(existingValue);
    if (indexToReplace > -1) {
      return replaceValueByPrice({
        indexToReplace,
        newValue: value,
        values,
      });
    }
  } else {
    return addValue({
      newValue: value,
      values,
    });
  }
  return values;
};

const replaceOrRemoveValuesTogether = ({
  adjustValues,
  newValues,
  values,
}: {
  adjustValues: SetAsksValues | SetBidsValues;
  newValues: AsksValues | BidsValues;
  values: AsksValues | BidsValues;
}) => {
  if (newValues?.length > 0) {
    let tempValues = [...values];
    newValues.forEach((value) => {
      if (value[1] === 0) {
        tempValues = removeValueByPrice({
          removePrice: value[0],
          values: tempValues,
        });
      } else {
        tempValues = replaceOrAddValue({
          value,
          values: tempValues,
        });
      }
    });
    adjustValues(tempValues);
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
  replaceOrRemoveValuesTogether({
    adjustValues: setAsksValues,
    newValues: asks,
    values: asksValues,
  });
  replaceOrRemoveValuesTogether({
    adjustValues: setBidsValues,
    newValues: bids,
    values: bidsValues,
  });
};
