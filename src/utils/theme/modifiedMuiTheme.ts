import { createMuiTheme } from '@material-ui/core';
import theme from '../../components/ThemeProvider/theme';
import muiTheme from '../../components/ThemeProvider/muiTheme';

export const modifiedMuiTheme = createMuiTheme({
  palette: {
    ...muiTheme.palette,
    primary: {
      ...theme.palette.primary,
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
    },
    type: 'light',
  },
});
