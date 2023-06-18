import type {
  Palette,
  TypeText,
  TypeBackground,
  PaletteOptions,
  SimplePaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: SimplePaletteColorOptions;
  }
  interface PaletteColor {
    9?: string;
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
    9?: string;
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
