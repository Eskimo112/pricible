export type Product = {
  id: string;
  name: string;
  price: number;
  imageList: string[];
  provider: "Shopee" | "Lazada" | "Tiki";
  sold: number;
  rate: number;
  location: string;
  isMall: boolean;
  description?: string;
  shopName: string;
  link: string;
  categoryId: string;
  discountedPrice: number;
};
