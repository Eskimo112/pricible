import { CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaFireAlt } from "react-icons/fa";
import AppButton from "../../components/AppButton";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../models/Product";
import { calculateDiscountPercent } from "../../utils";
import { getProducts } from "../api";

export default function HotProducts() {
  const theme = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Stack width="80%" alignItems="center" gap="20px" position="relative">
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Typography variant="h6">
          <FaFireAlt size={16} /> Bán chạy tuần này
        </Typography>
        <AppButton
          sx={{
            borderRadius: "30px",
            padding: "4px",
          }}
        >
          <BsArrowRightShort size={30} color={theme.palette.primary.main} />
        </AppButton>
      </Stack>
      {loading ? (
        <CircularProgress size={30} />
      ) : (
        <Grid container spacing={2}>
          {products
            .sort((a, b) => a.sold.localeCompare(b.sold))
            .slice(0, 5)
            .map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={2.4} xl={2}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      )}
    </Stack>
  );
}
