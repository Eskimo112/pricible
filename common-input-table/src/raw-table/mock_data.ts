import { AppColumn, AppRow } from './types';

export const MOCK_COLUMNS: AppColumn[] = [
  {
    id: 'order_id',
    name: 'Order ID',
    type: 'text',
    editable: false,
  },
  {
    id: 'order_item_id',
    name: 'Order Item ID',
    type: 'text',
    editable: false,
  },
  {
    id: 'account_name',
    name: 'Account Name',
    type: 'text',
    editable: false,
  },
  {
    id: 'channel_name',
    name: 'Channel Name',
    type: 'text',
    editable: false,
  },
  {
    id: 'product_name',
    name: 'Product Name',
    type: 'text',
    editable: false,
  },
  {
    id: 'option_name',
    name: 'Option Name',
    type: 'text',
    editable: false,
  },
  {
    id: 'brand',
    name: 'Brand',
    type: 'text',
    editable: false,
  },
  {
    id: 'order_date',
    name: 'Order Date',
    type: 'date',
    editable: false,
  },
  {
    id: 'quantity',
    name: 'Quantity',
    type: 'number',
    editable: false,
  },
  {
    id: 'shipping_cost',
    name: 'Shipping Cost',
    type: 'number',
    editable: true,
  },
];

const ACCOUNT_NAMES = [
  'Elon Musk',
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Mark Zuckerberg',
];

const CHANNEL_NAMES = ['Coupang', 'Amazon', 'Apple', 'Google', 'Xiaomi'];
const PRODUCT_NAMES = [
  'Samsung Galaxy S21',
  'Apple iPhone 15',
  'Google Pixel 7',
  'OnePlus 12',
  'Xiaomi 14',
];
const OPTION_NAMES = ['128GB', '256GB', '512GB', '1TB', '2TB'];
const BRANDS = ['Samsung', 'Apple', 'Google', 'OnePlus', 'Xiaomi'];

export const generateMockData = (count: number): AppRow[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    order_id: `12835${i + 1}`,
    order_item_id: `CID-0${i + 1}`,
    account_name: ACCOUNT_NAMES[i % ACCOUNT_NAMES.length],
    channel_name: CHANNEL_NAMES[i % CHANNEL_NAMES.length],
    product_name: PRODUCT_NAMES[i % PRODUCT_NAMES.length],
    option_name: OPTION_NAMES[i % OPTION_NAMES.length],
    brand: BRANDS[i % BRANDS.length],
    order_date: '2024/09/20',
    quantity: 1,
    shipping_cost: null,
  }));
};
