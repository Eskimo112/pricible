import { Theme, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { TbBrandShopee } from "react-icons/tb";
import AppButton from "../../components/AppButton";
import { useFilter } from "../../stores/filter";

const SHARED_BUTTON_SX = (theme: Theme, selected: boolean) => ({
  // width: "60%",
  ":hover": {
    background: selected
      ? theme.palette.primary.main
      : theme.palette.primary[2],
  },
  background: selected ? theme.palette.primary.main : theme.palette.primary[1],
  padding: "6px 8px",
  borderRadius: 1,
  color: selected ? "white" : theme.palette.text.primary,
});

export default function MallFilter() {
  const theme = useTheme();
  const { setFilter, isMall } = useFilter();
  const handleChange = (value: boolean | null) => {
    setFilter({ isMall: value });
  };
  return (
    <Stack gap="16px">
      <Stack direction="row" gap="4px">
        <TbBrandShopee color={theme.palette.primary.main} />
        <Typography
          variant="body2"
          color={(theme) => theme.palette.text.secondary}
        >
          LOẠI SHOP
        </Typography>
      </Stack>
      <Stack gap="8px" justifyContent="center" alignItems="center">
        <AppButton
          fullWidth
          sx={(theme) => SHARED_BUTTON_SX(theme, !isMall)}
          onClick={() => handleChange(null)}
        >
          Tất cả
        </AppButton>
        <AppButton
          fullWidth
          sx={(theme) => SHARED_BUTTON_SX(theme, Boolean(isMall))}
          onClick={() => handleChange(true)}
        >
          Shopee Mall, LazMall, Tiki Official
        </AppButton>
      </Stack>
    </Stack>
  );
}
