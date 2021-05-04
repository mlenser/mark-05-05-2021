import React, { createContext, useContext, useEffect, useState } from 'react';
import { mockData } from './mockData';
import { sumSize } from '../../utils/sumSize';

export type OrderbookContextProviderType = {
  asksValues: SizePrice[];
  bidsValues: SizePrice[];
  groupInterval: number;
  largestSum: number;
  setAsksValues: (values: SizePrice[]) => void;
  setBidsValues: (values: SizePrice[]) => void;
  setGroup: (value: number) => void;
  setLargestSum: (value: number) => void;
};

const OrderbookContext = createContext({} as OrderbookContextProviderType);

export const OrderbookContextProvider: React.FC = ({ children }) => {
  const [groupInterval, setGroup] = useState(0.5);
  const [asksSum, setAsksSum] = useState(0);
  const [asksValues, setAsksValues] = useState<SizePrice[]>(mockData[0].asks);
  const [bidsSum, setBidsSum] = useState(0);
  const [bidsValues, setBidsValues] = useState<SizePrice[]>(mockData[0].bids);
  const [largestSum, setLargestSum] = useState(Math.max(asksSum, bidsSum));

  const state: OrderbookContextProviderType = {
    asksValues,
    bidsValues,
    groupInterval,
    largestSum,
    setAsksValues,
    setBidsValues,
    setGroup,
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
