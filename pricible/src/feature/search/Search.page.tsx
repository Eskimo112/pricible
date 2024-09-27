import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import Banner from "../../components/Banner";
import FilterBar from "./FilterBar.component";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../models/Product";
import withNavbar from "../../withNavBar";
import { useEffect, useState } from "react";
import { useFilterStore } from "../../stores/filter";
import { toastError } from "../../notification";
import SearchPagination from "./Pagination.component";
import { getProducts } from "../api";

const Search = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const filterStore = useFilterStore();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const { removeFilter } = filterStore;
    removeFilter();
  }, []);

  useEffect(() => {
    const { setFilter, removeFilter, ...filter } = filterStore;
    setLoading(true);
    getProducts(filter)
      .then((res) => {
        setTotalPage(res.totalpage);
        setProducts(res.data);
      })
      .catch((error) => toastError(error))
      .finally(() => setLoading(false));
  }, [filterStore]);

  return (
    <Stack gap="40px" justifyContent="center" alignItems="center">
      <Typography variant="h6" textAlign="center">
        Kết quả tìm kiếm
      </Typography>
      <Box display="flex" gap="50px" width="100%">
        <FilterBar products={products} />

        <Box
          display="flex"
          flex="0 0 70%"
          height="fit-content"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="24px"
        >
          {loading ? (
            <CircularProgress size={60} />
          ) : (
            <>
              <Grid container spacing={2}>
                {products.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
              {totalPage > 1 && <SearchPagination totalPage={totalPage} />}{" "}
            </>
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default withNavbar(Search);
