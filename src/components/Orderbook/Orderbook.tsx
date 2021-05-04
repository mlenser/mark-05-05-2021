import React from 'react';
import styled, { css } from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Bids from './Bids';
import Asks from './Asks';
import GroupAdjuster from './GroupAdjuster';
import { OrderbookContextProvider } from './OrderbookContext';

const desktopStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const mobileStyle = css`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div<{ aboveMobile?: boolean }>`
  ${({ aboveMobile }) => (aboveMobile ? desktopStyle : mobileStyle)};
`;

const Orderbook: React.FC = () => {
  const aboveMobile = useMediaQuery('(min-width: 768px)');

  return (
    <OrderbookContextProvider>
      <div>
        <GroupAdjuster />
        <Wrapper aboveMobile={aboveMobile}>
          <Bids aboveMobile={aboveMobile} />
          <Asks aboveMobile={aboveMobile} />
        </Wrapper>
      </div>
    </OrderbookContextProvider>
  );
};

export default Orderbook;
