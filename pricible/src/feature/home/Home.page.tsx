import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AppButton from "../../components/AppButton";
import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import { toastError, toastSuccess } from "../../notification";
import useAuthStore from "../../stores/auth";
import withNavbar from "../../withNavBar";
import { useAuth } from "../auth/useAuth";
import Categories from "./Categories.component";
import DiscountedProducts from "./DiscountedProducts.component";

const Home = () => {
  const theme = useTheme();
  const { setUser } = useAuthStore();
  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    await login({ email: email, password: password })
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        toastError(error);
      });
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("pricible_email");
    const savedPassword = localStorage.getItem("pricible_password");
    if (savedEmail && savedPassword) {
      handleLogin(savedEmail, savedPassword);
    }
  }, []);

  return (
    <Stack gap="60px" justifyContent="center" alignItems="center" width="100%">
      <Banner />
      <Categories />

      <Stack
        width="80%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        position="relative"
      >
        <Typography variant="h6">Bán chạy hôm nay</Typography>
        <AppButton
          sx={{
            borderRadius: "30px",
            padding: "4px",
          }}
        >
          <BsArrowRightShort size={30} color={theme.palette.primary.main} />
        </AppButton>

        {/* <Stack direction="row" width="100%" gap="24px">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard product={product} />
          ))}
        </Stack> */}
      </Stack>
      <DiscountedProducts />
    </Stack>
  );
};

export default withNavbar(Home);
