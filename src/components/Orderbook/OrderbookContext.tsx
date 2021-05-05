import React, { createContext, useContext, useEffect, useState } from 'react';
import { SizePrice } from '../../types/SizePrice';
import { sumSize } from '../../utils/sumSize';

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
  const [asksSum, setAsksSum] = useState(0);
  const [asksValues, setAsksValues] = useState<SizePrice[]>([]);
  const [bidsSum, setBidsSum] = useState(0);
  const [bidsValues, setBidsValues] = useState<SizePrice[]>([]);
  const [largestSum, setLargestSum] = useState(Math.max(asksSum, bidsSum));

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
    const asksSumLocal = sumSize({ values: asksValues });
    setAsksSum(asksSumLocal);
    const bidsSumLocal = sumSize({ values: bidsValues });
    setBidsSum(bidsSumLocal);
    setLargestSum(Math.max(asksSumLocal, bidsSumLocal));
  }, [asksValues, bidsValues]);

  return (
    <OrderbookContext.Provider value={state}>
      {children}
    </OrderbookContext.Provider>
  );
};

export const useOrderbookContext = (): OrderbookContextProviderType =>
  useContext(OrderbookContext);

export default OrderbookContext;
