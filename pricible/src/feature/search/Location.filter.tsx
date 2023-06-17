import { Theme, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { GrLocation } from "react-icons/gr";
import AppButton from "../../components/AppButton";
import { useFilter } from "../../stores/filter";

const LOCATION = ["TP.HCM", "Hà Nội"];

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

export default function LocationFilter() {
  const theme = useTheme();
  const { setFilter, location } = useFilter();
  const handleChange = (value: string | null) => {
    setFilter({ location: value });
  };
  return (
    <Stack gap="16px">
      <Stack direction="row" gap="4px">
        <GrLocation color={theme.palette.primary.main} />
        <Typography
          variant="body2"
          color={(theme) => theme.palette.text.secondary}
        >
          VỊ TRÍ
        </Typography>
      </Stack>
      <Stack gap="8px" justifyContent="center" alignItems="center">
        <AppButton
          fullWidth
          sx={(theme) => SHARED_BUTTON_SX(theme, location === null)}
          onClick={() => handleChange(null)}
        >
          Tất cả
        </AppButton>
        {LOCATION.map((item, index) => (
          <AppButton
            key={index}
            fullWidth
            sx={(theme) => SHARED_BUTTON_SX(theme, item === location)}
            onClick={() => handleChange(item)}
          >
            {item}
          </AppButton>
        ))}
      </Stack>
    </Stack>
  );
}
