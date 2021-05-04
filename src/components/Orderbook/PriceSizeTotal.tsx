import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import styled, { css } from 'styled-components';
import { formatNumber } from '../../utils/formatNumber';
import { formatPrice } from '../../utils/formatPrice';
import TooltipIndicator from '../TooltipIndicator';
import { useOrderbookContext } from './OrderbookContext';
import { getPercentage } from '../../utils/getPercentage';

type Field = string;
type Type = string;

const getDirectionFromType = (type: Type) => {
  if (type === 'asks') {
    return 'to right';
  }
  if (type === 'bids') {
    return 'to left';
  }
};

const getColorFromType = (type: Type) => {
  if (type === 'asks') {
    return 'rgb(68 38 49)';
  }
  if (type === 'bids') {
    return 'rgb(23 60 46)';
  }
};

const Wrapper = styled.div<{ filled?: string; type: string }>`
  ${({ filled, type }) =>
    filled &&
    css`
      background: linear-gradient(
        ${getDirectionFromType(type)},
        ${getColorFromType(type)} 0%,
        ${getColorFromType(type)} ${filled},
        transparent ${filled},
        transparent 100%
      );
    `};
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.normal};
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const AsksPriceStyle = css`
  color: ${({ theme }) => theme.palette.asksColor};
`;
const BidsPriceStyle = css`
  color: ${({ theme }) => theme.palette.bidsColor};
`;

const Column = styled.div<{ field?: string; type?: string }>`
  text-align: right;
  text-shadow: 0 0 3px #000;
  ${({ field, type }) =>
    field === 'price' && (type === 'asks' ? AsksPriceStyle : BidsPriceStyle)};
`;

const getTitleAndText = ({
  field,
  type,
}: {
  field: Field;
  type: Type;
}): {
  text: string;
  title: string;
} => {
  if (field === 'price') {
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
  if (field === 'size') {
    return {
      text: 'Size',
      title: 'The number of contracts available at this price level.',
    };
  }
  if (field === 'total') {
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
  field,
  type,
}: {
  field: Field;
  type: Type;
}): React.ReactNode => {
  const { text, title } = getTitleAndText({ field, type });
  return (
    <Tooltip title={title}>
      <TooltipIndicator>{text}</TooltipIndicator>
    </Tooltip>
  );
};

const getColumn = ({ field, values }: { field: Field; values: SizePrice }) => {
  const [price, size, total] = values;
  if (field === 'price') {
    return formatPrice(price);
  }
  if (field === 'size') {
    return formatNumber(size);
  }
  if (field === 'total') {
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
  const { largestSum } = useOrderbookContext();
  return (
    <>
      <Wrapper type={type}>
        {order.map((field) => (
          <Column key={`column-${field}`}>{getHeading({ field, type })}</Column>
        ))}
      </Wrapper>
      {values.map(([price, size, total]) => (
        <Wrapper
          key={`${price}-${size}-${total}`}
          filled={getPercentage(total / largestSum)}
          type={type}
        >
          {order.map((field) => (
            <Column
              key={`${price}-${size}-${total}-${field}`}
              field={field}
              type={type}
            >
              {getColumn({ field, values: [price, size, total] })}
            </Column>
          ))}
        </Wrapper>
      ))}
    </>
  );
};

export default PriceSizeTotal;
