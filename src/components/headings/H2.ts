import styled from 'styled-components';
import HeadingBase from './HeadingBase';

const H2 = styled.h2<{ firstItem?: boolean }>`
  ${HeadingBase};
  color: ${({ theme }) => theme.palette.primary[500]};
  font-size: ${({ theme }) => theme.sizes.medium};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export default H2;
