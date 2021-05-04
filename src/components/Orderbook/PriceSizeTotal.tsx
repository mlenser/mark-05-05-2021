import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import styled, { css } from 'styled-components';
import { formatNumber } from '../../utils/formatNumber';
import { formatPrice } from '../../utils/formatPrice';

type Field = string;
type Type = string;

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.normal};
  grid-template-columns: 1fr 1fr 1fr;
`;

const AsksPriceStyle = css`
  color: rgb(241 79 76);
`;
const BidsPriceStyle = css`
  color: rgb(36 172 124);
`;

const Column = styled.div<{ field?: string; type?: string }>`
  text-align: right;
  ${({ field, type }) =>
    field === 'price' && (type === 'asks' ? AsksPriceStyle : BidsPriceStyle)};
`;

const TooltipIndicator = styled.span`
  border-bottom: 1px dotted ${({ theme }) => theme.palette.textColor};
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
  return (
    <>
      <Wrapper>
        {order.map((field) => (
          <Column key={`column-${field}`}>{getHeading({ field, type })}</Column>
        ))}
      </Wrapper>
      {values.map(([price, size, total]) => (
        <Wrapper key={`${price}-${size}-${total}`}>
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
