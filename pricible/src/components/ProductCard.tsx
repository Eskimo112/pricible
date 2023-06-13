import { Box, Stack, Typography } from "@mui/material";
import { Product } from "../models/Product";
import { formatPrice } from "../utils";
import { AiTwotoneStar } from "react-icons/ai";
import { lazadaMallBadge, shopeeMallBadge, tikiMallBadge } from "../constant";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  //   let cardPrimaryColor = "fff";
  //   switch (product.provider) {
  //     case "Shopee":
  //       cardPrimaryColor = "";
  //       break;
  //     case "Lazada":
  //       cardPrimaryColor = "";
  //       break;
  //     case "Tiki":
  //       cardPrimaryColor = "";
  //       break;
  //   }

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
        background: theme.palette.primary.light,
        borderRadius: "4px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        ":hover": {},
      })}
      position="relative"
    >
      <Box position="absolute" sx={{ top: 8, right: 8 }} height="20px">
        <MallBadge />
      </Box>
      <img width="100%" src={product.imageList[0]} />
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
        <Typography variant="body1" fontWeight={700}>
          {formatPrice(product.discountedPrice)}{" "}
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
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <AiTwotoneStar />
            <Typography fontSize={12}>{product.rate}</Typography>
          </Box>
          <Typography
            fontSize={12}
            color={(theme) => theme.palette.text.secondary}
          >
            Da ban {product.sold}
          </Typography>
        </Box>
        <Typography
          fontSize={12}
          color={(theme) => theme.palette.text.secondary}
        >
          {product.location}
        </Typography>
      </Stack>
    </Box>
  );
}
