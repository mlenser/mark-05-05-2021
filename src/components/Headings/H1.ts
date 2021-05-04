import styled from 'styled-components';
import HeadingBase from './HeadingBase';

const H1 = styled.h1<{ firstItem?: boolean }>`
  ${HeadingBase};
  color: ${({ theme }) => theme.palette.primary[500]};
  font-size: ${({ theme }) => theme.sizes.large};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.sizes.xlarge};
  }
`;

export default H1;
