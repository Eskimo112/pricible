import { CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../../components/AppButton";
import { toastError } from "../../notification";
import { useFilterStore } from "../../stores/filter";
import { Category, getAllCategory } from "./api";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const { setFilter } = useFilterStore();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAllCategory()
      .then((data) => setCategories(data))
      .catch((error) => toastError(error))
      .finally(() => setLoading(false));
  }, []);

  const handleClickCategory = (category: string) => {
    setFilter({ category: category });
    navigate("/search");
  };

  return (
    <Stack gap="12px" justifyContent="center" alignItems="center" width="75%">
      <Typography variant="h6"> Mua theo thể loại</Typography>
      {loading ? (
        <CircularProgress size={30} />
      ) : (
        <Stack
          direction="row"
          gap="12px"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {categories.map((item, index) => (
            <AppButton
              variant="outlined"
              key={item.id}
              sx={(theme) => ({
                border: "1px solid transparent",
                background: theme.palette.primary.light,
                padding: "6px 16px",
                borderRadius: 4,
                color: theme.palette.text.primary,
              })}
              onClick={() => handleClickCategory(item.name)}
            >
              {item.name}
            </AppButton>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
