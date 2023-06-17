import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import { AiOutlineShop } from "react-icons/ai";
import { SiShopee } from "react-icons/si";
import AppButton from "../../components/AppButton";
import { useFilter } from "../../stores/filter";

const PROVIDER = ["Shopee", "Lazada", "Tiki"];

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

export default function ProviderFilter() {
  const theme = useTheme();
  const { setFilter, provider } = useFilter();
  const handleChange = (value: string | null) => {
    setFilter({ provider: value });
  };
  return (
    <Stack gap="16px">
      <Stack direction="row" gap="4px">
        <AiOutlineShop color={theme.palette.primary.main} />
        <Typography
          variant="body2"
          color={(theme) => theme.palette.text.secondary}
        >
          NHÀ CUNG CẤP
        </Typography>
      </Stack>
      <Stack gap="8px" justifyContent="center" alignItems="center">
        <AppButton
          fullWidth
          sx={(theme) => SHARED_BUTTON_SX(theme, provider === null)}
          onClick={() => handleChange(null)}
        >
          Tất cả
        </AppButton>
        {PROVIDER.map((item, index) => (
          <AppButton
            key={index}
            fullWidth
            sx={(theme) => SHARED_BUTTON_SX(theme, item === provider)}
            onClick={() => handleChange(item)}
          >
            {item}
          </AppButton>
        ))}
      </Stack>
    </Stack>
  );
}
