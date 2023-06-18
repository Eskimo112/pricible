import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { BiSearch, BiUser } from "react-icons/bi";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import {
  Box,
  Button,
  InputAdornment,
  Popover,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AppIcon from "./AppIcon";
import AppTextField from "./AppTextField";
import { useFilter } from "../stores/filter";
import useDebounce from "../hooks/useDebounce";
import useAuthStore from "../stores/auth";
import AppButton from "./AppButton";
import { toastSuccess } from "../notification";
const NavBar = () => {
  const { keyword, setFilter } = useFilter();
  const [searchKey, setSearchKey] = useState(keyword);
  const debouncedSearchKey = useDebounce(searchKey, 300);
  const theme = useTheme();
  const { pathname } = useLocation();
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleInputChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setSearchKey(target.value);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("pricible_email");
    localStorage.removeItem("pricible_password");
    setUser(null);
    toastSuccess("Đăng xuất thành công");
  };

  useEffect(() => {
    setFilter({ keyword: debouncedSearchKey });
  }, [debouncedSearchKey]);

  return (
    <Box
      position="sticky"
      top="0"
      width="100%"
      boxSizing="border-box"
      paddingY="12px"
      paddingX="40px"
      zIndex={10000}
      sx={{ background: "white" }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <AppIcon />
        {pathname !== "/" && (
          <AppTextField
            value={searchKey}
            sx={{ width: "360px" }}
            inputProps={{
              style: {
                padding: "10px 0px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BiSearch />
                </InputAdornment>
              ),
            }}
            autoComplete="off"
            placeholder="Tìm kiếm sản phẩm"
            backgroundColor={theme.palette.neutral[5]}
            onChange={handleInputChange}
          />
        )}
        <Box display="flex" alignItems="center" gap="8px">
          {user !== null ? (
            <Stack alignItems="center" direction="row" gap="12px">
              <AppButton
                sx={{
                  padding: "8px",
                  display: "flex",
                  gap: "4px",
                  background: theme.palette.primary.light,
                }}
                onClick={() => navigate("/cart")}
              >
                <FaShoppingCart color={theme.palette.text.primary} size={20} />
                <Typography>Giỏ hàng</Typography>
                <Typography
                  fontSize={10}
                  sx={{
                    width: "18px",
                    height: "18px",
                    color: "white",
                    borderRadius: 4,
                    lineHeight: "18px",
                    background: theme.palette.text.primary,
                  }}
                >
                  4
                </Typography>
              </AppButton>
              <AppButton
                sx={{
                  padding: "8px",
                  display: "flex",
                  gap: "4px",
                  background: theme.palette.primary.light,
                }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <Typography>{user.name ?? "Ẩn danh"}</Typography>
                <FaUserCircle color={theme.palette.text.primary} size={24} />
              </AppButton>
            </Stack>
          ) : (
            <Link to="/auth/signin" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  textTransform: "none",
                  padding: "6px 16px",
                }}
              >
                Đăng nhập
              </Button>
            </Link>
          )}
        </Box>
        <Popover
          open={anchorEl !== null}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            sx: { padding: "12px", background: theme.palette.primary.light },
          }}
        >
          <AppButton onClick={handleLogout}>Đăng xuất</AppButton>
        </Popover>
      </Box>
    </Box>
  );
};

export default NavBar;
