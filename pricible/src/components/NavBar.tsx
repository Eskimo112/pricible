import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiSearchAlt, BiUser } from "react-icons/bi";
import { Box, Button } from "@mui/material";
import AppIcon from "./AppIcon";
// import { useAppSelector } from "../../hooks/use-app-selector";
const NavBar = () => {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();
  // const cartSize = useAppSelector((state: RootState) => state.cart.total_items);

  const handleInputChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setSearchString(target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    navigate(`/search?search=${searchString}`);
    event.preventDefault();
  };

  return (
    <Box position="static" width="100%" paddingY="12px" zIndex={1000}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <AppIcon />

        <Box display="flex" alignItems="center" gap="8px">
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
          {/* <UserButton></UserButton> */}
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
