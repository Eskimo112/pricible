import { useQuery } from '@tanstack/react-query';

import { generateMockData, MOCK_COLUMNS } from '../raw-table/mock_data';

type DataType = 'cogs' | 'shipping_cost' | 'sales_commission';

export const useRawTableQuery = ({
  type,
  page,
  perPage,
}: {
  type: DataType;
  page: number;
  perPage: number;
}) => {
  return useQuery({
    queryKey: ['rawTable'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const data = generateMockData(perPage);

      const columns = MOCK_COLUMNS;

      return { data, columns, total_rows: perPage };
    },
  });
};
