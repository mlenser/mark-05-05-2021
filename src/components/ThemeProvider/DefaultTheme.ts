import { Sizes } from './Sizes';
import { Widths } from './Widths';
import { Device } from './Device';

export interface DefaultTheme {
  device: Device;
  palette: {
    asksColor: string;
    background: string;
    bidsColor: string;
    blue: {
      main: string;
    };
    error: {
      main: string;
    };
    primary: {
      main: string;
    };
    textColor: string;
  };
  sizes: Sizes;
  widths: Widths;
}
