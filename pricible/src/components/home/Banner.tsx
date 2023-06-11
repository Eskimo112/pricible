import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../general/AppButton";
import AppTextField from "../general/AppTextField";

export default function Banner() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.keyCode === 33) {
      navigate("/search?search=" + searchValue);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(e.target.value);
  };
  return (
    <Stack
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="280px"
      sx={(theme) => ({
        background: theme.palette.primary.light,
      })}
      gap="24px"
    >
      <Typography variant="h4" fontWeight={600}>
        Tìm kiếm sản phẩm{" "}
        <Typography
          component="span"
          variant="h4"
          color={(theme) => theme.palette.primary.main}
          fontWeight={700}
        >
          tốt nhất
        </Typography>
      </Typography>
      <Stack direction="row" gap="24px" width="40%">
        <FormControl
          fullWidth
          onSubmit={() => navigate("/search?search=" + searchValue)}
        >
          <AppTextField
            fullWidth
            placeholder={"Nhập tên sản phẩm"}
            onKeyDown={handleEnter}
            onChange={handleInputChange}
          />
        </FormControl>
        <AppButton variant="contained">Tìm kiếm</AppButton>
      </Stack>
    </Stack>
  );
}
