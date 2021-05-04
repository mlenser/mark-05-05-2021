import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../../utils/formatNumber';
import { formatPrice } from '../../utils/formatPrice';

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.normal};
  grid-template-columns: 1fr 1fr 1fr;
`;

const Column = styled.div`
  text-align: right;
`;

const TooltipIndicator = styled.span`
  border-bottom: 1px dotted black;
`;

type Props = {
  values: SizePrice[];
};

const PriceSizeTotal: React.FC<Props> = ({ values }) => {
  return (
    <>
      <Wrapper>
        <Column>
          <Tooltip title="The bid price represents the maximum price that a user is willing to buy at. The ask price represents the minimum price a user is willing to sell at.">
            <TooltipIndicator>Price</TooltipIndicator>
          </Tooltip>
        </Column>
        <Column>
          <Tooltip title="The number of contracts available at this price level.">
            <TooltipIndicator>Size</TooltipIndicator>
          </Tooltip>
        </Column>
        <Column>
          <Tooltip title="Cumulative number of contracts at this price level and below">
            <TooltipIndicator>Total</TooltipIndicator>
          </Tooltip>
        </Column>
      </Wrapper>
      {values.map(([price, size, total]) => (
        <Wrapper key={`${price}-${size}-${total}`}>
          <Column>{formatPrice(price)}</Column>
          <Column>{formatNumber(size)}</Column>
          <Column>{formatNumber(total)}</Column>
        </Wrapper>
      ))}
    </>
  );
};

export default PriceSizeTotal;
