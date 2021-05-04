import React, { createContext, useContext, useState } from 'react';
import { mockData } from './mockData';

export type OrderbookContextProviderType = {
  asksValues: SizePrice[];
  bidsValues: SizePrice[];
  groupInterval: number;
  setAsksValues: (values: SizePrice[]) => void;
  setBidsValues: (values: SizePrice[]) => void;
  setGroup: (value: number) => void;
};

const OrderbookContext = createContext({} as OrderbookContextProviderType);

export const OrderbookContextProvider: React.FC = ({ children }) => {
  const [groupInterval, setGroup] = useState(0.5);
  const [asksValues, setAsksValues] = useState<SizePrice[]>(mockData[0].asks);
  const [bidsValues, setBidsValues] = useState<SizePrice[]>(mockData[0].bids);

  const state: OrderbookContextProviderType = {
    asksValues,
    bidsValues,
    groupInterval,
    setAsksValues,
    setBidsValues,
    setGroup,
  };

  return (
    <OrderbookContext.Provider value={state}>
      {children}
    </OrderbookContext.Provider>
  );
};

export const useOrderbookContext = (): OrderbookContextProviderType =>
  useContext(OrderbookContext);

export default OrderbookContext;
