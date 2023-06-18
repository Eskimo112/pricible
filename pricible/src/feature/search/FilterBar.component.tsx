import { Divider, Stack, Typography } from "@mui/material";
import { BiFilter } from "react-icons/bi";
import { Product } from "../../models/Product";
import CategoryFilter from "./Category.filter";
import LocationFilter from "./Location.filter";
import MallFilter from "./Mall.filter";
import PriceFilter from "./Price.filter";
import ProviderFilter from "./Provider.filter";

export default function FilterBar({ products }: { products: Product[] }) {
  return (
    <Stack flex="0 0 20%" height="100vh" padding="16px" gap="12px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={700}>
          Bộ lọc tìm kiếm
        </Typography>
        <BiFilter size={24} />
      </Stack>
      <Divider />
      <Stack gap="20px">
        <ProviderFilter />
        <CategoryFilter />
        <PriceFilter products={products} />
        <MallFilter />
        <LocationFilter products={products} />
      </Stack>
    </Stack>
  );
}
