import { Box, Grid, Stack, Typography } from "@mui/material";
import Banner from "../../components/Banner";
import FilterBar from "./FilterBar.component";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../models/Product";
import withNavbar from "../../withNavBar";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Áo Phông Rộng Nam Nữ Tay Lỡ 1969Unisex Áo Thun Rộng Cổ Tròn Giá Rẻ In HN Trà Đá Thiết Kế Năng Động Trẻ Trung",
    price: 109000,
    imageList: [
      "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfwtf3aqfw8n69_tn",
    ],
    provider: "Shopee",
    sold: 3452,
    rate: 4.5,
    location: "TP. Ho Chi Minh",
    isMall: true,
    shopName: "ABC",
    link: "https://shopee.vn/Áo-Phông-Rộng-Nam-Nữ-Tay-Lỡ-1969Unisex-Áo-Thun-Rộng-Cổ-Tròn-Giá-Rẻ-In-HN-Trà-Đá-Thiết-Kế-Năng-Động-Trẻ-Trung-i.244599267.19546613965?sp_atk=686859fe-3d33-40cd-a66b-e43059c8d6aa&xptdk=686859fe-3d33-40cd-a66b-e43059c8d6aa",
    categoryId: "123",
    discountedPrice: 55000,
  },
  {
    id: "2",
    name: "Áo Phông Rộng Nam Nữ Tay Lỡ 1969Unisex Áo Thun Rộng Cổ Tròn Giá Rẻ In HN Trà Đá Thiết Kế Năng Động Trẻ Trung",
    price: 109000,
    imageList: [
      "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfwtf3aqfw8n69_tn",
    ],
    provider: "Shopee",
    sold: 3452,
    rate: 4.5,
    location: "TP. Ho Chi Minh",
    isMall: false,
    shopName: "ABC",
    link: "https://shopee.vn/Áo-Phông-Rộng-Nam-Nữ-Tay-Lỡ-1969Unisex-Áo-Thun-Rộng-Cổ-Tròn-Giá-Rẻ-In-HN-Trà-Đá-Thiết-Kế-Năng-Động-Trẻ-Trung-i.244599267.19546613965?sp_atk=686859fe-3d33-40cd-a66b-e43059c8d6aa&xptdk=686859fe-3d33-40cd-a66b-e43059c8d6aa",
    categoryId: "123",
    discountedPrice: 55000,
  },
  {
    id: "3",
    name: "Áo Phông Rộng Nam Nữ Tay Lỡ 1969Unisex Áo Thun Rộng Cổ Tròn Giá Rẻ In HN Trà Đá Thiết Kế Năng Động Trẻ Trung",
    price: 109000,
    imageList: [
      "https://down-vn.img.susercontent.com/file/b54aa1c5414d5cf78adcd1aca144e16c_tn",
    ],
    provider: "Tiki",
    sold: 3452,
    rate: 4.5,
    location: "TP. Ho Chi Minh",
    isMall: true,
    shopName: "ABC",
    link: "https://shopee.vn/Áo-Phông-Rộng-Nam-Nữ-Tay-Lỡ-1969Unisex-Áo-Thun-Rộng-Cổ-Tròn-Giá-Rẻ-In-HN-Trà-Đá-Thiết-Kế-Năng-Động-Trẻ-Trung-i.244599267.19546613965?sp_atk=686859fe-3d33-40cd-a66b-e43059c8d6aa&xptdk=686859fe-3d33-40cd-a66b-e43059c8d6aa",
    categoryId: "123",
    discountedPrice: 55000,
  },
  {
    id: "4",
    name: "Áo Phông Rộng Nam Nữ Tay Lỡ 1969Unisex Áo Thun Rộng Cổ Tròn Giá Rẻ In HN Trà Đá Thiết Kế Năng Động Trẻ Trung",
    price: 109000,
    imageList: [
      "https://down-vn.img.susercontent.com/file/b54aa1c5414d5cf78adcd1aca144e16c_tn",
    ],
    provider: "Shopee",
    sold: 3452,
    rate: 4.5,
    location: "TP. Ho Chi Minh",
    isMall: false,
    shopName: "ABC",
    link: "https://shopee.vn/Áo-Phông-Rộng-Nam-Nữ-Tay-Lỡ-1969Unisex-Áo-Thun-Rộng-Cổ-Tròn-Giá-Rẻ-In-HN-Trà-Đá-Thiết-Kế-Năng-Động-Trẻ-Trung-i.244599267.19546613965?sp_atk=686859fe-3d33-40cd-a66b-e43059c8d6aa&xptdk=686859fe-3d33-40cd-a66b-e43059c8d6aa",
    categoryId: "123",
    discountedPrice: 55000,
  },
  {
    id: "5",
    name: "Áo Phông Rộng Nam Nữ Tay Lỡ 1969Unisex Áo Thun Rộng Cổ Tròn Giá Rẻ In HN Trà Đá Thiết Kế Năng Động Trẻ Trung",
    price: 109000,
    imageList: [
      "https://down-vn.img.susercontent.com/file/b54aa1c5414d5cf78adcd1aca144e16c_tn",
    ],
    provider: "Lazada",
    sold: 3452,
    rate: 4.5,
    location: "TP. Ho Chi Minh",
    isMall: true,
    shopName: "ABC",
    link: "https://shopee.vn/Áo-Phông-Rộng-Nam-Nữ-Tay-Lỡ-1969Unisex-Áo-Thun-Rộng-Cổ-Tròn-Giá-Rẻ-In-HN-Trà-Đá-Thiết-Kế-Năng-Động-Trẻ-Trung-i.244599267.19546613965?sp_atk=686859fe-3d33-40cd-a66b-e43059c8d6aa&xptdk=686859fe-3d33-40cd-a66b-e43059c8d6aa",
    categoryId: "123",
    discountedPrice: 55000,
  },
];

const Search = () => {
  const products = MOCK_PRODUCTS;
  return (
    <Stack gap="40px">
      <Banner />

      <Typography variant="h4" textAlign="center">
        Ket qua tim kiem
      </Typography>
      <Box display="flex" gap="50px">
        <FilterBar />
        <Box display="flex" flex="0 0 70%">
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default withNavbar(Search);
