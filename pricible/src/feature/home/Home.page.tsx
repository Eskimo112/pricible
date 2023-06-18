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
import HotProducts from "./HotProducts.component";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack gap="60px" justifyContent="center" alignItems="center" width="100%">
      <Banner />
      <Categories />
      <HotProducts />
      <DiscountedProducts />
    </Stack>
  );
};

export default withNavbar(Home);
