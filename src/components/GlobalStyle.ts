import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
		background-color: ${({ theme }) => theme.palette.background};
		color: ${({ theme }) => theme.palette.textColor};
    margin: 0;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`;

export default GlobalStyle;
