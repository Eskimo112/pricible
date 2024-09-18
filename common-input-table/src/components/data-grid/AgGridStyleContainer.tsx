import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const AgGridStyleContainer = styled(Box)(({ theme }) => ({
  '--ag-data-color': theme.palette.neutral[0],
  '--ag-foreground-color': theme.palette.neutral[0],
  '--ag-font-size': '12px',
  '--ag-active-color': theme.palette.primary[50],

  // GRID
  ['--ag-borders']: '1px solid',
  ['--ag-border-color']: theme.palette.neutral[5],
  ['--ag-grid-size']: '8px',
  ['--ag-border-radius']: '4px',
  ['--ag-wrapper-border-radius']: '8px',
  ['--ag-background-color']: theme.palette.neutral[6],
  ['.ag-overlay']: {
    backgroundColor: theme.palette.neutral[7],
  },
  // HEADER
  [`--ag-icon-font-color`]: theme.palette.neutral[25],
  [`--ag-header-foreground-color`]: theme.palette.neutral[25],
  ['--ag-borders-critical']: '1px solid',
  ['--ag-header-background-color']: theme.palette.neutral[7],
  ['--ag-header-column-separator-display']: 'block',
  ['--ag-header-column-separator-width']: '1px',
  ['--ag-header-column-separator-height']: '100%',
  ['--ag-header-column-separator-color']: theme.palette.neutral[5],
  ['.ag-header-cell']: {
    ['&:active']: {
      cursor: 'grabbing',
    },
  },
  ['--ag-header-column-resize-handle-color']: 'transparent',
  // ['.ag-header-cell-resize:hover']: {
  //   ['--ag-header-column-resize-handle-display']: 'block',
  //   ['--ag-header-column-resize-handle-width']: '4px',
  //   ['--ag-header-column-resize-handle-height']: '100%',
  //   ['--ag-header-column-resize-handle-color']: theme.palette.primary[10],
  // },
  // BODY ROW
  ['.ag-row']: {
    ['--ag-row-group-indent-size']: '0px',
    ['--ag-background-color']: theme.palette.neutral[8],
    ['--ag-odd-row-background-color']: theme.palette.neutral[8],
  },
  // ['.ag-row-hover']: {
  //   ['--ag-background-color']: 'yellow',
  //   ['--ag-odd-row-background-color']: 'yellow',
  // },
  // CELL
  ['--ag-row-border-width']: '1px',
  ['--ag-row-border-style']: 'solid',
  ['--ag-row-border-color']: theme.palette.neutral[5],
  ['--ag-cell-horizontal-padding']: '16px',
  ['--ag-cell-horizontal-border']: '1px solid' + ' ' + theme.palette.neutral[5],
  ['.ag-cell-wrapper']: {
    height: '100%',
    ['.ag-cell-value']: {
      height: '100%',
    },
  },

  // PINNED LEFT SHADOW
  ['.ag-header .ag-pinned-right-header, .ag-body-viewport .ag-pinned-right-cols-container, .ag-floating-bottom .ag-pinned-right-floating-bottom']:
    {
      position: 'relative',
      zIndex: 1,
      boxShadow:
        'var(--cg-pinned-right-shadow, 0px 4px 10px 0px rgba(0, 0, 0, 0.05))',
    },
  // SUPPRESS WARNING
  ['--ag-list-item-height']: '24px',
  ['--ag-header-height']: '32px',
  ['--ag-row-height']: '32px',
}));

export default AgGridStyleContainer;
