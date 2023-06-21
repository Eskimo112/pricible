import {
  Box,
  CircularProgress,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
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
import useAuthStore from "../../stores/auth";
import { toastError, toastSuccess } from "../../notification";
import Carousel from "react-material-ui-carousel";
import { getProductDetail, getProductPriceHistory } from "./api";
import { addToWishList } from "../wishlist/api";

function ProductInfo({ product }: { product: Product }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [addLoading, setAddLoading] = useState(false);

  const handleAddToWishList = () => {
    if (user === null) {
      toastSuccess("Bạn có thể thêm vào giỏ hàng sau khi đăng nhập");
      navigate("/auth/signin");
      return;
    }
    setAddLoading(true);
    addToWishList(user.id, product.id)
      .then(() => toastSuccess("Thêm vào giỏ hàng thành công"))
      .catch((error) => toastError(error))
      .finally(() => setAddLoading(false));
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
        <Carousel
          indicatorContainerProps={{
            style: {
              display: "none",
            },
          }}
        >
          {product.images.map((item) => (
            <img width="100%" src={item.image1} />
          ))}
        </Carousel>
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
          <Link
            to={product.link}
            style={{ width: "100%", textDecoration: "none" }}
          >
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
            {addLoading ? <CircularProgress size={14} /> : `Lưu vào giỏ hàng`}
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
  const [product, setProduct] = useState<Product | null>(null);
  const [priceHistory, setPriceHistory] = useState<HistoryPrice[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getProductDetail(id)
      .then((res) => setProduct(res))
      .catch((error) => toastError(error))
      .finally(() => setLoading(false));

    getProductPriceHistory(id)
      .then((res) => setPriceHistory(res))
      .catch((error) => toastError(error))
      .finally(() => setLoading(false));
  }, [id]);

  const { series, category } = seriesAndCategoryFrom(priceHistory);

  if (loading)
    return (
      <Stack
        width="100%"
        justifyContent="center"
        alignItems={"center"}
        flex="1"
      >
        <CircularProgress size={60} />;
      </Stack>
    );

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
        <Typography
          fontSize={14}
          color={(theme) => theme.palette.text.secondary}
          fontStyle="italic"
        >
          Giá của sản phẩm trong vòng 90 ngày vừa qua
        </Typography>
        {priceHistory.length > 0 ? (
          <LineChart
            series={series}
            category={category}
            tooltipTitle="Giá bán"
          />
        ) : (
          <Typography>Không có dữ liệu</Typography>
        )}
      </Stack>
      {/* <Stack
        width="80%"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        position="relative"
      >
        <Typography variant="h6">Sản phẩm tương tự</Typography>
        <AppButton
          sx={{
            borderRadius: "30px",
            padding: "4px",
            position: "absolute",
            top: 0,
            right: 50,
          }}
        >
          <BsArrowRightShort size={30} color={theme.palette.primary.main} />
        </AppButton>
        <Grid container spacing={2}>
          {MOCK_PRODUCTS.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={2.3} xl={2}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Stack> */}
    </Stack>
  );
}
export default withNavbar(ProductDetail);
