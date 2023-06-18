import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../models/Product";
import withNavbar from "../../withNavBar";
import { useEffect, useState } from "react";
import { toastError } from "../../notification";
import { getWishList, WishListItem } from "./api";
import useAuthStore from "../../stores/auth";
import { getProductDetail } from "../product/api";
import WishListItemCard from "../../components/WishListCard";

const WishList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishList, setWishList] = useState<WishListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthStore();

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    getWishList(user.id)
      .then((res) => {
        setWishList(res);
      })
      .catch((error) => toastError(error))
      .finally(() => setLoading(false));
  }, [user]);

  useEffect(() => {
    if (!wishList) return;
    wishList.forEach((item) => {
      const duplicate = products.find(
        (product) => item.productId === product.id
      );
      if (!duplicate)
        getProductDetail(item.productId.toString()).then((product) =>
          setProducts([...products, product])
        );
    });
  }, [wishList]);

  return (
    <Stack width="100%" gap="40px" justifyContent="center" alignItems="center">
      <Typography variant="h6" textAlign="center">
        Giỏ hàng của bạn
      </Typography>

      {loading ? (
        <CircularProgress size={60} />
      ) : (
        <>
          <Grid container spacing={2} width="70%">
            {products.map((product, index) => (
              <Grid item key={index} xs={12}>
                <WishListItemCard
                  product={product}
                  onDelete={() => handleDeleteProduct(product.id)}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Stack>
  );
};

export default withNavbar(WishList);
