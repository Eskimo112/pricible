import { createTheme } from '@mui/material';

import { neutralColors, primaryColors } from './color-tokens';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: primaryColors['100'],
      100: primaryColors['100'],
      90: primaryColors['90'],
      80: primaryColors['80'],
      70: primaryColors['70'],
      60: primaryColors['60'],
      50: primaryColors['50'],
      40: primaryColors['40'],
      30: primaryColors['30'],
      20: primaryColors['20'],
      10: primaryColors['10'],
    },
    neutral: {
      main: neutralColors['8'], // TODO: update later
      25: neutralColors['25'],
      8: neutralColors['8'],
      7: neutralColors['7'],
      6: neutralColors['6'],
      5: neutralColors['5'],
      4: neutralColors['4'],
      3: neutralColors['3'],
      2: neutralColors['2'],
      1: neutralColors['1'],
      0: neutralColors['0'],
    },
  },
  shape: {
    borderRadius: 8,
  },
});
