import theme from '../../components/ThemeProvider/theme';

export const modifiedTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
    },
    type: 'light',
  },
};
