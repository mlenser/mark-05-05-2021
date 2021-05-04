import { createMuiTheme } from '@material-ui/core';
import theme from '../../components/ThemeProvider/theme';
import muiTheme from '../../components/ThemeProvider/muiTheme';

export const modifiedMuiTheme = createMuiTheme({
  palette: {
    ...muiTheme.palette,
    background: {
      default: theme.palette.background,
    },
    primary: {
      ...theme.palette.primary,
    },
    type: 'dark',
  },
});
