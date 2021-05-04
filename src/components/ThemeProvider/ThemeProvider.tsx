import React from 'react';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyle from '../GlobalStyle';
import { modifiedTheme } from '../../utils/theme/modifiedTheme';
import { modifiedMuiTheme } from '../../utils/theme/modifiedMuiTheme';

const ThemeProvider: React.FC = ({ children }) => (
  <ScThemeProvider theme={modifiedTheme}>
    <MuiThemeProvider theme={modifiedMuiTheme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </MuiThemeProvider>
  </ScThemeProvider>
);

export default ThemeProvider;
