import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import Banner from "../../components/Banner";
import FilterBar from "./FilterBar.component";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../models/Product";
import withNavbar from "../../withNavBar";
import { useEffect, useState } from "react";
import { useFilter } from "../../stores/filter";
import { toastError } from "../../notification";
import SearchPagination from "./Pagination.component";

const Search = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState([]);
  const filterStore = useFilter();

  // useEffect(() => {
  //   const { setFilter, ...filter } = filterStore;
  //   getProducts(filter)
  //     .then((products) => setProducts(products))
  //     .catch((error) => toastError(error));
  // }, [filterStore]);
  return (
    <Stack gap="40px" justifyContent="center" alignItems="center">
      <Typography variant="h6" textAlign="center">
        Kết quả tìm kiếm
      </Typography>
      {loading ? (
        <CircularProgress size={60} />
      ) : (
        <Box display="flex" gap="50px">
          <FilterBar />
          <Box
            display="flex"
            flex="0 0 70%"
            flexDirection="column"
            alignItems="center"
          >
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            {products.length > 12 && <SearchPagination />}
          </Box>
        </Box>
      )}
    </Stack>
  );
};

export default withNavbar(Search);
