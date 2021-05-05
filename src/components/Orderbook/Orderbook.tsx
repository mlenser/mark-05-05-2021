import React from 'react';
import { OrderbookContextProvider } from './OrderbookContext';
import DataWrapper from './DataWrapper/DataWrapper';
import OrderbookUI from './OrderbookUI';

const Orderbook: React.FC = () => (
  <OrderbookContextProvider>
    <DataWrapper />
    <OrderbookUI />
  </OrderbookContextProvider>
);

export default Orderbook;
