import { SizePrice } from '../../../types/SizePrice';
import { OrderbookContextProviderType } from '../OrderbookContext';
import { ValuesStore } from '../../../types/ValuesStore';

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
  values: ValuesStore;
}) => Object.assign(values.current, { [indexToReplace]: newValue });

export const addValue = ({
  newValue,
  values,
}: {
  newValue: SizePrice;
  values: ValuesStore;
}) => {
  console.log('newValue', newValue);
  values.current.push(newValue);
};

const replaceOrAddValue = ({
  value,
  values,
}: {
  value: SizePrice;
  values: ValuesStore;
}) => {
  const existingValue = values.current.find((val) => val[0] === value[0]);
  if (existingValue) {
    const indexToReplace = values.current.indexOf(existingValue);
    if (indexToReplace > -1) {
      replaceValueByPrice({
        indexToReplace,
        newValue: value,
        values,
      });
    }
  } else {
    addValue({
      newValue: value,
      values,
    });
  }
};

export const getNewValues = ({
  newValues,
  values,
}: {
  newValues: AsksValues | BidsValues;
  values: ValuesStore;
}) => {
  const valuesToRemove = getValuesToRemove({ newValues });
  if (valuesToRemove?.length > 0) {
    values.current = values.current.filter(
      (value) => !valuesToRemove.includes(value[0]),
    );
  }

  newValues
    .filter((value) => value[1] !== 0)
    .forEach((value) => {
      replaceOrAddValue({
        value,
        values,
      });
    });
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
  asksValues: ValuesStore;
  bids: SizePrice[];
  bidsValues: ValuesStore;
  setAsksValues: SetAsksValues;
  setBidsValues: SetBidsValues;
}) => {
  if (asks?.length > 0) {
    getNewValues({
      newValues: asks,
      values: asksValues,
    });
    setAsksValues(asksValues.current);
  }
  if (bids?.length > 0) {
    getNewValues({
      newValues: bids,
      values: bidsValues,
    });
    setBidsValues(bidsValues.current);
  }
};
