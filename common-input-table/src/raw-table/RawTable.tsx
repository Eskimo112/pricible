import { useMemo } from 'react';
import DataGrid from '../components/data-grid';
import { useRawTableQuery } from '../queries/use-raw-table-query';
import type { ColDef } from '@ag-grid-community/core';
import { Stack } from '@mui/material';

const RawTable = () => {
  const { data, isLoading } = useRawTableQuery({
    type: 'cogs',
    page: 1,
    perPage: 10000,
  });

  const colDefs: ColDef[] = useMemo(() => {
    if (!data) return [];
    return data.columns.map((item) => ({
      field: item.id,
      headerName: item.name,
      type: item.type,
      filter: true,
      editable: item.editable,
      width: 150,
      pinned: item.editable ? 'right' : undefined,
    }));
  }, [data]);

  const rowData = useMemo(() => {
    if (!data) return [];
    return data.data;
  }, [data]);

  return (
    <Stack width="80%" height="80%">
      <DataGrid
        loading={isLoading}
        colDefs={colDefs}
        rowData={rowData}
        onViewportChanged={() => {}}
        onColumnResized={() => {}}
        onColumnMoved={() => {}}
        onGridReady={() => {}}
      />
    </Stack>
  );
};

export default RawTable;
