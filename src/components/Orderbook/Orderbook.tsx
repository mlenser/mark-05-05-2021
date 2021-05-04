import React from 'react';
import styled from 'styled-components';
import Bids from './Bids';
import Asks from './Asks';
import GroupAdjuster from './GroupAdjuster';
import { OrderbookContextProvider } from './OrderbookContext';

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.normal};
  grid-template-columns: 1fr 1fr;
`;

const Orderbook: React.FC = () => (
  <OrderbookContextProvider>
    <div>
      <GroupAdjuster />
      <Wrapper>
        <Bids />
        <Asks />
      </Wrapper>
    </div>
  </OrderbookContextProvider>
);

export default Orderbook;
