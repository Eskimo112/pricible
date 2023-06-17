import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { BsArrowRightShort } from "react-icons/bs";
import AppButton from "../../components/AppButton";
import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import withNavbar from "../../withNavBar";
import { MOCK_PRODUCTS } from "../search/Search.page";

const Home = () => {
  const theme = useTheme();
  return (
    <Stack gap="60px" justifyContent="center" alignItems="center" width="100%">
      <Banner />

      <Stack
        width="80%"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        position="relative"
      >
        <Typography variant="h6">Bán chạy hôm nay</Typography>
        <AppButton
          sx={{
            borderRadius: "30px",
            padding: "4px",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <BsArrowRightShort size={30} color={theme.palette.primary.main} />
        </AppButton>

        <Stack direction="row" width="100%" gap="24px">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard product={product} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default withNavbar(Home);
