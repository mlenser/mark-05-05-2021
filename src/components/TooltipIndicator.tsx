import styled from 'styled-components';

const TooltipIndicator = styled.span`
  border-bottom: 1px dotted ${({ theme }) => theme.palette.textColor};
`;

export default TooltipIndicator;
