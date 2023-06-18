import { InputAdornment, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import BannerLeft from "../assets/BannerLeft";
import BannerRight from "../assets/BannerRight";
import { useFilter } from "../stores/filter";
import AppButton from "./AppButton";
import AppTextField from "./AppTextField";

export default function Banner() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { setFilter } = useFilter();

  const handleSubmit = () => {
    setFilter({ keyword: searchValue });
    navigate("/search");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.keyCode === 33) {
      handleSubmit();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(e.target.value);
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      width="100%"
      sx={(theme) => ({
        background: theme.palette.primary[1],
      })}
      gap="24px"
    >
      {/* <BannerLeft theme={theme} /> */}
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="40%"
        gap="24px"
        height="280px"
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

        <Stack direction="row" gap="24px" width="100%">
          <AppTextField
            fullWidth
            placeholder={"Nhập tên sản phẩm"}
            onKeyDown={handleEnter}
            onChange={handleInputChange}
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BiSearch />
                </InputAdornment>
              ),
            }}
          />
          <AppButton
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            sx={{ padding: "8px 30px", fontSize: "18px" }}
          >
            Tìm kiếm
          </AppButton>{" "}
        </Stack>
      </Stack>
      {/* <BannerRight theme={theme} /> */}
    </Stack>
  );
}
