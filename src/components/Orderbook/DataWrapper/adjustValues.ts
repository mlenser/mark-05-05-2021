import { SizePrice } from '../../../types/SizePrice';
import { OrderbookContextProviderType } from '../OrderbookContext';

type AsksValues = OrderbookContextProviderType['asksValues'];
type BidsValues = OrderbookContextProviderType['bidsValues'];
type SetAsksValues = OrderbookContextProviderType['setAsksValues'];
type SetBidsValues = OrderbookContextProviderType['setBidsValues'];

export const getValuesToRemove = ({
  newValues,
}: {
  newValues: AsksValues | BidsValues;
}) => newValues.filter((value) => value[1] === 0).map((value) => value[0]);

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

export const getNewValues = ({
  newValues,
  values,
}: {
  newValues: AsksValues | BidsValues;
  values: AsksValues | BidsValues;
}) => {
  let tempValues = [...values];
  const valuesToRemove = getValuesToRemove({ newValues });
  if (valuesToRemove?.length > 0) {
    tempValues = tempValues.filter(
      (value) => !valuesToRemove.includes(value[0]),
    );
  }

  newValues
    .filter((value) => value[1] !== 0)
    .forEach((value) => {
      tempValues = replaceOrAddValue({
        value,
        values: tempValues,
      });
    });
  return tempValues;
};

export const adjustValues = ({
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
  if (asks?.length > 0) {
    const newAsksValue = getNewValues({
      newValues: asks,
      values: asksValues,
    });
    setAsksValues(newAsksValue);
  }
  if (bids?.length > 0) {
    const newBidsValue = getNewValues({
      newValues: bids,
      values: bidsValues,
    });
    setBidsValues(newBidsValue);
  }
};
