export type AppColumnType = 'text' | 'number' | 'date' | 'boolean';

export type AppColumn = {
  id: string;
  name: string;
  type: AppColumnType;
  editable: boolean;
};

export type AppRow = Record<string, string | number | boolean | null> & {
  id: string;
};
