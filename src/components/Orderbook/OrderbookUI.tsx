import React from 'react';
import styled, { css } from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Bids from './Bids';
import Asks from './Asks';
import GroupAdjuster from './GroupAdjuster';

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

const OrderbookUI: React.FC = () => {
  const aboveMobile = useMediaQuery('(min-width: 768px)');

  return (
    <div>
      <GroupAdjuster />
      <Wrapper aboveMobile={aboveMobile}>
        <Bids aboveMobile={aboveMobile} />
        <Asks aboveMobile={aboveMobile} />
      </Wrapper>
    </div>
  );
};

export default OrderbookUI;
