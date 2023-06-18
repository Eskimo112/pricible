import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Product } from "../models/Product";
import { calculateDiscountPercent, formatPrice } from "../utils";
import { AiTwotoneStar } from "react-icons/ai";
import { lazadaMallBadge, shopeeMallBadge, tikiMallBadge } from "../constant";
import { useNavigate } from "react-router-dom";
import TikiLogo from "/tiki-logo.png";
import LazadaLogo from "/lazada-logo.jpeg";
import ShopeeLogo from "/shopee-logo.jpg";
import Carousel from "react-material-ui-carousel";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const theme = useTheme();
  const navigate = useNavigate();

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
        height="24px"
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
  return (
    <Box
      height="fit-content"
      sx={(theme) => ({
        borderRadius: 1,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        transition: "transform 0.5s ease",
        ":hover": {
          background: theme.palette.primary.light,
          transform: "scale(1.05)",
        },
      })}
      position="relative"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <Box width="100%" position="relative">
        {product.images.length > 0 ? (
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
        ) : (
          <Box
            sx={{
              aspectRatio: "1/1",
              width: "100%",
              background: theme.palette.primary.light,
            }}
          ></Box>
        )}
        <Box position="absolute" left="8px" top="8px" zIndex={1000}>
          <ProviderBadge />
        </Box>
        <Box
          position="absolute"
          sx={{ bottom: 4, right: 0, zIndex: 1000 }}
          height="16px"
        >
          <MallBadge />
        </Box>
        <Typography
          position="absolute"
          component="span"
          color="white"
          fontWeight={600}
          fontSize="12px"
          padding="2px 4px"
          sx={{
            background: theme.palette.primary.main,
            borderRadius: "4px",
            top: 8,
            right: 8,
            zIndex: 1000,
          }}
        >
          {`-${calculateDiscountPercent(
            product.discountedPrice,
            product.price
          )}%`}
        </Typography>
      </Box>
      <Stack padding="4px 12px" gap="12px">
        <Typography
          variant="body2"
          overflow="hidden"
          textOverflow="ellipsis"
          style={{
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
              fontSize={12}
              color={(theme) => theme.palette.text[0]}
              fontWeight={600}
            >
              {product.rate}
            </Typography>
          </Box>
          <Typography
            fontSize={12}
            color={(theme) => theme.palette.text.secondary}
          >
            Đã bán{" "}
            <Typography
              component="span"
              fontSize={12}
              color={(theme) => theme.palette.text[0]}
              fontWeight={600}
            >
              {product.sold}
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
