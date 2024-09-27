import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { BiLogInCircle, BiSearch, BiUser } from "react-icons/bi";
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
import { useFilterStore } from "../stores/filter";
import useDebounce from "../hooks/useDebounce";
import useAuthStore from "../stores/auth";
import AppButton from "./AppButton";
import { toastError, toastSuccess } from "../notification";
import { useAuth } from "../feature/auth/useAuth";
import { getWishList, WishListItem } from "../feature/wishlist/api";
const NavBar = () => {
  const { keyword, setFilter } = useFilterStore();
  const [searchKey, setSearchKey] = useState(keyword);
  const debouncedSearchKey = useDebounce(searchKey, 300);
  const theme = useTheme();
  const { pathname } = useLocation();
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [wishList, setWishList] = useState<WishListItem[]>([]);

  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    await login({ email: email, password: password })
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        toastError(error);
      });
  };
  useEffect(() => {
    if (!user) return;
    getWishList(user.id)
      .then((res) => {
        setWishList(res);
      })
      .catch((error) => toastError(error));
  }, [user]);

  useEffect(() => {
    const savedEmail = localStorage.getItem("pricible_email");
    const savedPassword = localStorage.getItem("pricible_password");
    if (savedEmail && savedPassword) {
      handleLogin(savedEmail, savedPassword);
    }
  }, []);

  const handleInputChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setSearchKey(target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.keyCode === 33) {
      setFilter({ keyword: searchKey });
      navigate("/search");
    }
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
      zIndex={1001}
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
            onKeyDown={handleEnter}
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
                onClick={() => navigate("/wishlist")}
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
                  {wishList.length}
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
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 600,
                  textTransform: "none",
                  padding: "6px 16px",
                }}
              >
                Đăng nhập
                <BiLogInCircle size={20} />
              </Button>
            </Link>
          )}
        </Box>
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
          <AppButton onClick={handleLogout}>Đăng xuất</AppButton>
        </Popover>
      </Box>
    </Box>
  );
};

export default NavBar;
