// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Palette, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: SimplePaletteColorOptions;
  }

  interface PaletteOptions {
    neutral: SimplePaletteColorOptions;
  }

  interface PaletteColor {
    100?: string;
    90?: string;
    80?: string;
    70?: string;
    60?: string;
    50?: string;
    40?: string;
    30?: string;
    20?: string;
    10?: string;

    8?: string;
    7?: string;
    6?: string;
    5?: string;
    4?: string;
    3?: string;
    2?: string;
    1?: string;
    0?: string;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    90?: string;
    80?: string;
    70?: string;
    60?: string;
    50?: string;
    40?: string;
    30?: string;
    25?: string;
    20?: string;
    10?: string;

    8?: string;
    7?: string;
    6?: string;
    5?: string;
    4?: string;
    3?: string;
    2?: string;
    1?: string;
    0?: string;
  }

  interface TypeText {
    darkGreen: string;
    darkPink: string;
    5: string;
    4: string;
    3: string;
    2: string;
    1: string;
    0: string;
  }

  interface TypeBackground {
    0: string;
    1: string;
  }
}
