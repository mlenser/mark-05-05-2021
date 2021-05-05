import React, { createContext, useContext, useEffect, useState } from 'react';
import { SizePrice } from '../../types/SizePrice';
import { sumSize } from '../../utils/sumSize';
import { topValues } from '../../utils/topValues';
import { groupedValuesWithTotal } from '../../utils/groupedValuesWithTotal';

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
    const asksForDisplay = groupedValuesWithTotal({
      groupInterval,
      values: asksValues,
    });
    setAsksValuesForDisplay(asksForDisplay);
    const asksSum = sumSize({ values: topValues(asksForDisplay) });
    const bidsForDisplay = groupedValuesWithTotal({
      groupInterval,
      values: bidsValues,
    });
    setBidsValuesForDisplay(bidsForDisplay);
    const bidsSum = sumSize({ values: topValues(bidsForDisplay) });
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
