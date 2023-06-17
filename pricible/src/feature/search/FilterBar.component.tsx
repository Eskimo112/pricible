import { Divider, Stack, Typography } from "@mui/material";
import LocationFilter from "./Location.filter";
import MallFilter from "./Mall.filter";
import PriceFilter from "./Price.filter";
import ProviderFilter from "./Provider.filter";

export default function FilterBar() {
  return (
    <Stack
      flex="0 0 20%"
      height="100vh"
      // sx={(theme) => ({ background: theme.palette.primary.light })}
      padding="16px"
      gap="12px"
    >
      <Typography variant="h6" fontWeight={700}>
        Bộ lọc tìm kiếm
      </Typography>
      <Divider />
      <Stack gap="20px">
        <ProviderFilter />
        <PriceFilter />
        <MallFilter />
        <LocationFilter />
      </Stack>
    </Stack>
  );
}
