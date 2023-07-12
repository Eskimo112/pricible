import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Product } from "../models/Product";
import { calculateDiscountPercent, formatPrice } from "../utils";
import { AiTwotoneStar } from "react-icons/ai";
import { lazadaMallBadge, shopeeMallBadge, tikiMallBadge } from "../constant";
import { Link, useNavigate } from "react-router-dom";
import TikiLogo from "/tiki-logo.png";
import LazadaLogo from "/lazada-logo.jpeg";
import ShopeeLogo from "/shopee-logo.jpg";
import AppButton from "./AppButton";
import { BsArrowRightShort, BsDot } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import { removeFromWishList } from "../feature/wishlist/api";
import useAuthStore from "../stores/auth";
import { toastError, toastSuccess } from "../notification";

type Props = {
  product: Product;
  onDelete: () => void;
};

export default function WishListItemCard({ product, onDelete }: Props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useAuthStore();

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
      <Box
        component="img"
        src={logoUrl}
        alt=""
        height="20px"
        display="flex"
        style={{
          borderRadius: "4px",
          objectFit: "cover",
        }}
      />
    );
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

  const handleRemoveFromWishList = (productId: number) => {
    if (!user) return;
    removeFromWishList(user.id, productId)
      .then(() => {
        onDelete();
        toastSuccess("Xóa bỏ sản phẩm thành công");
      })
      .catch((error) => toastError(error));
  };
  return (
    <Box
      display="flex"
      width="100%"
      gap="24px"
      height="fit-content"
      sx={(theme) => ({
        borderRadius: 1,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        transition: "transform 0.5s ease",
        ":hover": {
          background: theme.palette.primary.light,
          transform: "scale(1.02)",
        },
      })}
      position="relative"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <Box
        display="flex"
        flex="0 0 20%"
        width="100%"
        position="relative"
        padding="12px"
        sx={{ aspectRatio: "1/1" }}
      >
        {product.images.length > 0 ? (
          <img width="100%" src={product.images[0].image1} />
        ) : (
          <Box
            sx={{
              aspectRatio: "1/1",
              width: "100%",
              background: theme.palette.primary.light,
            }}
          ></Box>
        )}
        <Box position="absolute" left="16px" top="16px" zIndex={1000}>
          <ProviderBadge />
        </Box>
        <Box
          position="absolute"
          sx={{ bottom: 16, right: 16, zIndex: 1000 }}
          height="14px"
        >
          <MallBadge />
        </Box>
        <Typography
          position="absolute"
          component="span"
          color="white"
          fontWeight={600}
          fontSize="10px"
          padding="2px 4px"
          sx={{
            background: theme.palette.primary.main,
            borderRadius: "4px",
            top: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          {`-${calculateDiscountPercent(
            product.discountedPrice,
            product.price
          )}%`}
        </Typography>
      </Box>
      <Stack
        display="flex"
        flex="0 0 70%"
        padding="4px 12px"
        gap="16 opx"
        justifyContent="center"
      >
        <Typography
          variant="body1"
          fontSize={18}
          overflow="hidden"
          textOverflow="ellipsis"
          style={{
            fontWeight: "600",
            whiteSpace: "normal",
            wordWrap: "break-word",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.name}
        </Typography>
        <Stack gap="4px" direction="row" alignItems="center">
          <Typography
            variant="body1"
            fontSize={18}
            fontWeight={700}
            // color={(theme) => theme.palette.primary.main}
          >
            {formatPrice(product.discountedPrice)}{" "}
          </Typography>
          <Typography
            marginLeft="4px"
            component="span"
            sx={(theme) => ({
              textDecoration: "line-through",
              color: theme.palette.text.secondary,
            })}
          >
            {formatPrice(product.price)}
          </Typography>
        </Stack>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <AiTwotoneStar color={theme.palette.primary.main} />
            <Typography
              fontSize={14}
              color={(theme) => theme.palette.text[0]}
              fontWeight={600}
            >
              {product.rate}
            </Typography>
          </Box>
          <Typography
            fontSize={14}
            color={(theme) => theme.palette.text.secondary}
          >
            Đã bán{" "}
            <Typography
              component="span"
              fontSize={14}
              color={(theme) => theme.palette.text[0]}
              fontWeight={600}
            >
              {product.sold}
            </Typography>
          </Typography>
        </Box>
        <Stack direction="row" width="100%" gap="12px">
          <Link
            to={product.link}
            style={{ width: "100%", textDecoration: "none" }}
          >
            <AppButton
              sx={{ padding: "6px", fontSize: 14 }}
              fullWidth
              variant="contained"
            >
              Mua ngay
              <BsArrowRightShort size={24} />
            </AppButton>
          </Link>
          <AppButton
            sx={{ padding: "6px", fontSize: 14 }}
            fullWidth
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFromWishList(product.id);
            }}
          >
            Xóa khỏi giỏ hàng
            <MdDelete size={20} />
          </AppButton>
        </Stack>
      </Stack>
    </Box>
  );
}
