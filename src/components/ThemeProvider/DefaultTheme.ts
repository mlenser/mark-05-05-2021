import { Sizes } from './Sizes';
import { Widths } from './Widths';
import { Device } from './Device';

type Color = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};

export interface DefaultTheme {
  device: Device;
  palette: {
    asksColor: string;
    background: string;
    bidsColor: string;
    blue: Color & {
      main: string;
    };
    error: Color & {
      main: string;
    };
    primary: Color & {
      main: string;
    };
    textColor: string;
  };
  sizes: Sizes;
  widths: Widths;
}
