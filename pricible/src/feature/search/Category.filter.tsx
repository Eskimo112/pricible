import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Popover,
  RadioGroup,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import { filter } from "lodash";
import { useEffect, useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { BsCaretDownFill } from "react-icons/bs";
import { SiShopee } from "react-icons/si";
import AppButton from "../../components/AppButton";
import { useFilterStore } from "../../stores/filter";
import { Category, getAllCategory } from "../home/api";

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

export default function CategoryFilter() {
  const theme = useTheme();
  const { setFilter, category } = useFilterStore();
  const [categories, setCategories] = useState<Category[]>([]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleChange = (value: string | null) => {
    setFilter({ category: value, pageIndex: 1 });
  };
  useEffect(() => {
    getAllCategory()
      .then((res) => setCategories(res))
      .catch((error) => console.log(error));
  });

  if (categories.length === 0) return <></>;
  return (
    <Stack gap="16px">
      <Stack direction="row" gap="4px">
        <AiOutlineShop color={theme.palette.primary.main} />
        <Typography
          variant="body2"
          color={(theme) => theme.palette.text.secondary}
        >
          THỂ LOẠI
        </Typography>
      </Stack>
      <Stack gap="8px" justifyContent="center" alignItems="center">
        <AppButton
          fullWidth
          sx={(theme) => SHARED_BUTTON_SX(theme, false)}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          endIcon={<BsCaretDownFill size={16} />}
        >
          {category ? category : "Tất cả"}
        </AppButton>
        <Popover
          open={anchorEl !== null}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            sx: { padding: "12px", background: theme.palette.primary.light },
          }}
        >
          <Stack gap="6px" maxHeight="200px" sx={{ overflow: "auto" }}>
            <AppButton
              sx={(theme) => SHARED_BUTTON_SX(theme, category === null)}
              onClick={() => handleChange(null)}
            >
              Tất cả
            </AppButton>
            {categories.map((item, index) => (
              <AppButton
                key={index}
                sx={(theme) => SHARED_BUTTON_SX(theme, item.name === category)}
                onClick={() => handleChange(item.name)}
              >
                {item.name}
              </AppButton>
            ))}
          </Stack>
        </Popover>
      </Stack>
    </Stack>
  );
}
