import type {
  ColDef,
  ColumnResizedEvent,
  ColumnState,
  GridReadyEvent,
  ViewportChangedEvent,
} from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
import type { SxProps, Theme } from '@mui/material/styles';
import { forwardRef } from 'react';

import AgGridStyleContainer from './AgGridStyleContainer';
import { EMPTY_ARRAY, ROW_HEIGHT } from './constants';
import { AppRow } from '../../raw-table/types';

type DataGridProps = {
  loading: boolean;
  // context: AgGridContext;
  colDefs: ColDef<AppRow, string | number | null>[];
  rowData?: AppRow[] | null | undefined;
  footerRowData?: AppRow[];
  onViewportChanged: (event: ViewportChangedEvent<AppRow, any>) => void;
  onColumnResized: (event: ColumnResizedEvent<AppRow, any>) => void;
  onColumnMoved: (newColumnsState: ColumnState[]) => void;
  onGridReady: (event: GridReadyEvent<AppRow>) => void;
  //
  cssVars?: {
    ['--ag-borders']?: string;
    ['--ag-border-color']?: string;
  };
  sx?: SxProps<Theme>;
  //
};

const UNPIN_OP = () => [];

const DataGrid = forwardRef<AgGridReact<AppRow>, DataGridProps>(
  (
    {
      loading,
      colDefs,
      rowData,
      footerRowData = EMPTY_ARRAY,
      cssVars,
      sx,
      // context,

      onGridReady,
      onColumnMoved,
      onColumnResized,
      onViewportChanged,
      //
    },
    agGrid,
  ) => {
    return (
      <AgGridStyleContainer
        className="ag-theme-quartz"
        sx={sx}
        style={{
          height: '100%',
          width: '100%',
          ...cssVars,
        }}
        //
      >
        <AgGridReact<AppRow>
          ref={agGrid}
          loading={loading}
          // context={context}

          columnDefs={colDefs}
          rowData={rowData}
          pinnedBottomRowData={footerRowData}
          getRowId={(data) => data.data.id}
          processUnpinnedColumns={UNPIN_OP}
          // loadingOverlayComponent={CustomLoadingOverlay}
          // noRowsOverlayComponent={CustomNoRowsOverlay}
          rowHeight={ROW_HEIGHT}
          headerHeight={ROW_HEIGHT}
          // NOTE: configs
          // suppressCellFocus
          // suppressClickEdit
          // suppressHeaderFocus
          // suppressCsvExport
          // suppressExcelExport
          // suppressDragLeaveHidesColumns
          // enableCellTextSelection
          // maintainColumnOrder
          //
          onGridReady={onGridReady}
          onColumnResized={onColumnResized}
          onDragStopped={(event) => {
            const states = event.api.getColumnState();
            onColumnMoved(states);
          }}
          onViewportChanged={onViewportChanged}
        />
      </AgGridStyleContainer>
    );
  },
);

export default DataGrid;

DataGrid.displayName = 'DataGrid';
