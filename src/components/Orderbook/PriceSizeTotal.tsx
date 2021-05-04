import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../../utils/formatNumber';
import { formatPrice } from '../../utils/formatPrice';

type Ord = string;
type Type = string;

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.normal};
  grid-template-columns: 1fr 1fr 1fr;
`;

const Column = styled.div`
  text-align: right;
`;

const TooltipIndicator = styled.span`
  border-bottom: 1px dotted ${({ theme }) => theme.palette.textColor};
`;

const getTitleAndText = ({
  ord,
  type,
}: {
  ord: Ord;
  type: Type;
}): {
  text: string;
  title: string;
} => {
  if (ord === 'price') {
    if (type === 'bids') {
      return {
        text: 'Price',
        title:
          'The bid price represents the maximum price that a user is willing to buy at.',
      };
    }
    if (type === 'asks') {
      return {
        text: 'Price',
        title:
          'The ask price represents the minimum price a user is willing to sell at.',
      };
    }
  }
  if (ord === 'size') {
    return {
      text: 'Size',
      title: 'The number of contracts available at this price level.',
    };
  }
  if (ord === 'total') {
    return {
      text: 'Total',
      title: 'Cumulative number of contracts at this price level.',
    };
  }
  return {
    text: '',
    title: '',
  };
};

const getHeading = ({
  ord,
  type,
}: {
  ord: Ord;
  type: Type;
}): React.ReactNode => {
  const { text, title } = getTitleAndText({ ord, type });
  return (
    <Tooltip title={title}>
      <TooltipIndicator>{text}</TooltipIndicator>
    </Tooltip>
  );
};

const getColumn = ({ ord, values }: { ord: Ord; values: SizePrice }) => {
  const [price, size, total] = values;
  if (ord === 'price') {
    return formatPrice(price);
  }
  if (ord === 'size') {
    return formatNumber(size);
  }
  if (ord === 'total') {
    return formatNumber(total);
  }
};

type Props = {
  order?: string[];
  values: SizePrice[];
  type: string;
};

const PriceSizeTotal: React.FC<Props> = ({
  order = ['price', 'size', 'total'],
  type,
  values,
}) => {
  return (
    <>
      <Wrapper>
        {order.map((ord) => (
          <Column key={`column-${ord}`}>{getHeading({ ord, type })}</Column>
        ))}
      </Wrapper>
      {values.map(([price, size, total]) => (
        <Wrapper key={`${price}-${size}-${total}`}>
          {order.map((ord) => (
            <Column key={`${price}-${size}-${total}-${ord}`}>
              {getColumn({ ord, values: [price, size, total] })}
            </Column>
          ))}
        </Wrapper>
      ))}
    </>
  );
};

export default PriceSizeTotal;
