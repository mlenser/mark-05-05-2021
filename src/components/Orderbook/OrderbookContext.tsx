import React, { createContext, useContext, useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SizePrice } from '../../types/SizePrice';
import { sumSize } from '../../utils/sumSize';
import { topValues } from '../../utils/topValues';
import { groupedValuesWithTotal } from '../../utils/groupedValuesWithTotal';
import { lastValues } from '../../utils/lastValues';

export type OrderbookContextProviderType = {
  asksValues: SizePrice[];
  asksValuesForDisplay: SizePrice[];
  bidsValues: SizePrice[];
  bidsValuesForDisplay: SizePrice[];
  groupInterval: number;
  largestSum: number;
  setAsksValues: (values: SizePrice[]) => void;
  setBidsValues: (values: SizePrice[]) => void;
  setGroupInterval: (value: number) => void;
  setLargestSum: (value: number) => void;
};

const OrderbookContext = createContext({} as OrderbookContextProviderType);

export const OrderbookContextProvider: React.FC = ({ children }) => {
  const [groupInterval, setGroupInterval] = useState(0.5);
  const [asksValues, setAsksValues] = useState<SizePrice[]>([]);
  const [asksValuesForDisplay, setAsksValuesForDisplay] = useState<SizePrice[]>(
    [],
  );
  const [bidsValues, setBidsValues] = useState<SizePrice[]>([]);
  const [bidsValuesForDisplay, setBidsValuesForDisplay] = useState<SizePrice[]>(
    [],
  );
  const [largestSum, setLargestSum] = useState(0);
  const aboveMobile = useMediaQuery('(min-width: 768px)');

  const state: OrderbookContextProviderType = {
    asksValues,
    asksValuesForDisplay,
    bidsValues,
    bidsValuesForDisplay,
    groupInterval,
    largestSum,
    setAsksValues,
    setBidsValues,
    setGroupInterval,
    setLargestSum,
  };

  useEffect(() => {
    const asksGrouped = groupedValuesWithTotal({
      groupInterval,
      values: asksValues,
    });
    const asksForDisplay = topValues(asksGrouped);
    setAsksValuesForDisplay(asksForDisplay);
    const asksSum = sumSize({ values: asksForDisplay });
    const bidsGrouped = groupedValuesWithTotal({
      groupInterval,
      values: bidsValues,
    });
    const bidsForDisplay = aboveMobile
      ? topValues(bidsGrouped)
      : lastValues(bidsGrouped.reverse());
    setBidsValuesForDisplay(bidsForDisplay);
    const bidsSum = sumSize({ values: bidsForDisplay });
    setLargestSum(Math.max(asksSum, bidsSum));
  }, [asksValues, bidsValues]);

  return (
    <OrderbookContext.Provider value={state}>
      {children}
    </OrderbookContext.Provider>
  );
};

export const useOrderbookContext = (): OrderbookContextProviderType =>
  useContext(OrderbookContext);
