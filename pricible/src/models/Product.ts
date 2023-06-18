export type ImageItem = {
  id: number;
  numberId: number;
  image1: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  images: ImageItem[];
  provider: "Shopee" | "Lazada" | "Tiki";
  sold: string;
  rate: number;
  location: string;
  isMall: boolean;
  description?: string;
  shopName: string;
  link: string;
  categoryId: string;
  discountedPrice: number;
};
