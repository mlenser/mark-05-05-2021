import React, { createContext, useContext, useEffect, useState } from 'react';
import { SizePrice } from '../../types/SizePrice';
import { sumSize } from '../../utils/sumSize';
import { topValues } from '../../utils/topValues';

export type OrderbookContextProviderType = {
  asksValues: SizePrice[];
  bidsValues: SizePrice[];
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
  const [bidsValues, setBidsValues] = useState<SizePrice[]>([]);
  const [largestSum, setLargestSum] = useState(0);

  const state: OrderbookContextProviderType = {
    asksValues,
    bidsValues,
    groupInterval,
    largestSum,
    setAsksValues,
    setBidsValues,
    setGroupInterval,
    setLargestSum,
  };

  useEffect(() => {
    const asksSum = sumSize({ values: topValues(asksValues) });
    const bidsSum = sumSize({ values: topValues(bidsValues) });
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
