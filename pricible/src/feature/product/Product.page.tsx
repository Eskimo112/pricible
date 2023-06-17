import {
  Box,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { AiOutlineShop, AiTwotoneStar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import AppButton from "../../components/AppButton";
import { Product } from "../../models/Product";
import { calculateDiscountPercent, formatPrice } from "../../utils";
import withNavbar from "../../withNavBar";
import {
  lazadaMallBadge,
  shopeeMallBadge,
  tikiMallBadge,
} from "../../constant";
import TikiLogo from "../../../public/tiki-logo.png";
import LazadaLogo from "../../../public/lazada-logo.jpeg";
import ShopeeLogo from "../../../public/shopee-logo.jpg";
import LineChart from "../../components/line-chart/LineChart";
import { HistoryPrice } from "../../models/HistoryPrice";
import { seriesAndCategoryFrom } from "./utils";
import { MOCK_PRODUCTS } from "../search/Search.page";
import ProductCard from "../../components/ProductCard";
import useAuthStore from "../../stores/auth";
import { toastError, toastSuccess } from "../../notification";

const MOCK_PRODUCT: Product = {
  id: "1",
  name: "Áo Phông Rộng Nam Nữ Tay Lỡ 1969Unisex Áo Thun Rộng Cổ Tròn Giá Rẻ In HN Trà Đá Thiết Kế Năng Động Trẻ Trung",
  price: 109000,
  imageList: [
    "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfwtf3aqfw8n69_tn",
  ],
  provider: "Lazada",
  sold: 3452,
  rate: 4.5,
  location: "TP.HCM",
  isMall: true,
  shopName: "shopsigiakho",
  link: "https://shopee.vn/Áo-Phông-Rộng-Nam-Nữ-Tay-Lỡ-1969Unisex-Áo-Thun-Rộng-Cổ-Tròn-Giá-Rẻ-In-HN-Trà-Đá-Thiết-Kế-Năng-Động-Trẻ-Trung-i.244599267.19546613965?sp_atk=686859fe-3d33-40cd-a66b-e43059c8d6aa&xptdk=686859fe-3d33-40cd-a66b-e43059c8d6aa",
  categoryId: "123",
  discountedPrice: 55000,
  description: ` Tiết kiệm chi phí tối đa, hiệu quả cao
  - Phương thức tự bảo vệ tiết kiệm nhất cho hộ gia đình có thu nhập trung bình
  Sản phẩm có đèn led nhấp nháy như camera đang hoạt động.
  Những tên có ý đồ bất chính đều sẽ phải dè chừng.`,
};

const MOCK_HISTORY: HistoryPrice[] = [
  {
    id: 1,
    productId: 1,
    date: "2023-06-15T00:00:00",
    price: 72000,
  },
  {
    id: 1,
    productId: 1,
    date: "2023-06-16T00:00:00",
    price: 52000,
  },
  {
    id: 1,
    productId: 1,
    date: "2023-06-18T00:00:00",
    price: 62000,
  },
  {
    id: 1,
    productId: 1,
    date: "2023-06-10T00:00:00",
    price: 44000,
  },
  {
    id: 1,
    productId: 1,
    date: "2023-06-11T00:00:00",
    price: 55000,
  },
  {
    id: 1,
    productId: 1,
    date: "2023-06-23T00:00:00",
    price: 80000,
  },
  {
    id: 1,
    productId: 1,
    date: "2023-06-30T00:00:00",
    price: 55000,
  },
  {
    id: 1,
    productId: 1,
    date: "2023-06-15T00:00:00",
    price: 72000,
  },
];

function ProductInfo({ product }: { product: Product }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleAddToWishList = () => {
    if (user === null) {
      toastSuccess("Mời đăng nhập trước");
      navigate("/auth/signin");
      return;
    }
    //call api
    return;
  };
  const MallBadge = (): JSX.Element => {
    if (!product.isMall) return <></>;
    if (product.provider === "Tiki") {
      return tikiMallBadge;
    }
    if (product.provider === "Shopee") {
      return shopeeMallBadge;
    }
    if (product.provider === "Lazada") {
      return lazadaMallBadge;
    }
    return <></>;
  };

  const ProviderBadge = (): JSX.Element => {
    if (!product.isMall) return <></>;
    let logoUrl = "";
    if (product.provider === "Tiki") {
      logoUrl = TikiLogo;
    }
    if (product.provider === "Shopee") {
      logoUrl = ShopeeLogo;
    }
    if (product.provider === "Lazada") {
      logoUrl = LazadaLogo;
    }
    return (
      <img
        src={logoUrl}
        alt=""
        height="36px"
        style={{
          borderRadius: "4px",
          objectFit: "cover",
        }}
      />
    );
  };
  return (
    <Stack width="80%" direction="row" gap="40px">
      <Stack flex="0 0 35%" position="relative">
        <CardMedia
          component="img"
          alt={product.name}
          image={product.imageList[0]}
          style={{ width: "100%", objectFit: "cover" }}
        />
        <Box position="absolute" sx={{ top: 8, left: 8 }} height="20px">
          <MallBadge />
        </Box>
      </Stack>
      <Stack direction="column" flex="0 0 65%" gap="24px">
        <Stack>
          <Typography variant="h6" component="h2">
            {product.name}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" gap="12px">
              {/* RATE */}
              <Stack direction="row" gap="4px" alignItems="center">
                <Typography fontWeight={600}>{product.rate}</Typography>
                <AiTwotoneStar color={theme.palette.primary.main} size={18} />
              </Stack>
              {/* SOLD */}
              <Stack direction="row" gap="4px" alignItems="center">
                <Typography fontWeight={600}>{product.sold}</Typography>
                <Typography color={theme.palette.text.secondary} fontSize={14}>
                  Đã bán
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap="12px">
              <Stack direction="row" gap="4px" alignItems="center">
                <AiOutlineShop color={theme.palette.primary.main} size={18} />
                <Typography fontWeight={600}>{product.shopName}</Typography>
              </Stack>
              <Stack direction="row" gap="4px" alignItems="center">
                <MdOutlineLocationOn
                  color={theme.palette.primary.main}
                  size={18}
                />
                <Typography fontWeight={600}>{product.location}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" gap="12px" alignItems="baseline">
          <Typography>Nhà bán:</Typography>
          <ProviderBadge />
        </Stack>
        {/* DESCRIPTION */}
        <Typography>{product.description}</Typography>
        {/* PRICE */}
        <Stack direction="row" alignItems="center" gap="12px">
          <Typography
            component="span"
            sx={{ textDecoration: "line-through" }}
            color={theme.palette.text.secondary}
          >
            {formatPrice(product.price)}
          </Typography>
          <Typography
            component="span"
            color={theme.palette.primary.main}
            fontWeight={600}
            fontSize="28px"
          >
            {formatPrice(product.discountedPrice)}
          </Typography>
          <Typography
            component="span"
            color="white"
            fontWeight={600}
            fontSize="14px"
            padding="3px 8px"
            sx={{ background: theme.palette.primary.main, borderRadius: 1 }}
          >
            {`-${calculateDiscountPercent(
              product.discountedPrice,
              product.price
            )}%`}
          </Typography>
        </Stack>
        {/* BUTTON */}
        <Stack direction="row" width="100%" gap="12px">
          <Link to={product.link} style={{ width: "100%" }}>
            <AppButton
              sx={{ padding: "10px", fontSize: 18 }}
              fullWidth
              variant="contained"
            >
              Mua ngay
              <BsArrowRightShort size={24} />
            </AppButton>
          </Link>
          <AppButton
            sx={{ padding: "10px", fontSize: 18 }}
            fullWidth
            variant="outlined"
            onClick={handleAddToWishList}
          >
            Lưu vào giỏ hàng
            <IoMdCart size={20} />
          </AppButton>
        </Stack>
        <hr style={{ marginBottom: "6px", backgroundColor: "gray" }} />
      </Stack>
    </Stack>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(MOCK_PRODUCT);

  // useEffect(() => {
  //   if (!id) return;
  //   //Fetch product
  // }, [id]);
  const { series, category } = seriesAndCategoryFrom(MOCK_HISTORY);
  if (!product) return <></>;

  return (
    <Stack
      width="100%"
      justifyContent="center"
      alignItems={"center"}
      gap="40px"
      padding="20px"
    >
      <ProductInfo product={product} />

      <Stack width="70%" justifyContent="center" alignItems="center">
        <Typography variant="h6">Lịch sử giá</Typography>
        <LineChart series={series} category={category} tooltipTitle="Giá bán" />
      </Stack>
      <Stack width="80%" justifyContent="center" alignItems="center" gap="20px">
        <Typography variant="h6">Sản phẩm tương tự</Typography>
        <Grid container spacing={2}>
          {MOCK_PRODUCTS.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={2.3} xl={2}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
export default withNavbar(ProductDetail);
