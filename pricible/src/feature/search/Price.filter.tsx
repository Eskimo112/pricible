import { Slider, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { TbZoomMoney } from "react-icons/tb";
import { Product } from "../../models/Product";
import { useFilterStore } from "../../stores/filter";
import { formatPrice } from "../../utils";

export default function PriceFilter({ products }: { products: Product[] }) {
  const theme = useTheme();
  const { setFilter, smallestPrice, biggestPrice } = useFilterStore();
  const handleChange = (left: number | null, right: number | null) => {
    setFilter({ smallestPrice: left, biggestPrice: right, pageIndex: 1 });
  };
  return (
    <Stack gap="8px">
      <Stack direction="row" gap="4px">
        <TbZoomMoney color={theme.palette.primary.main} />
        <Typography
          variant="body2"
          color={(theme) => theme.palette.text.secondary}
        >
          GIÁ
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        color={(theme) => theme.palette.text.secondary}
      >
        {formatPrice(smallestPrice ?? 0)} -{" "}
        {formatPrice(biggestPrice ?? 5000000)}
      </Typography>
      <Slider
        defaultValue={[0, 5000000]}
        min={0}
        max={5000000}
        step={10000}
        valueLabelFormat={(value) => `${formatPrice(value)}`}
        onChangeCommitted={(e, value) => {
          if (typeof value === "number") {
            handleChange(value, null);
            return;
          }
          const [left, right] = value;
          handleChange(left, right);
        }}
        valueLabelDisplay="auto"
      />
    </Stack>
  );
}
