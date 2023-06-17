import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiLogInCircle, BiSearchAlt, BiUser } from "react-icons/bi";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import AppIcon from "./AppIcon";
import { AiFillCheckCircle } from "react-icons/ai";
// import { useAppSelector } from "../../hooks/use-app-selector";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Stack
      padding="40px 60px"
      sx={(theme) => ({ background: theme.palette.primary.main })}
      gap="50px"
    >
      <Stack justifyContent="space-between" direction="row">
        {/* LEFT */}
        <Stack gap="8px">
          <AppIcon color="white" />
          {/* <Typography
            component="h3"
            fontSize={26}
            fontWeight={700}
            color="white"
          >
            Đưa bạn đến với sự lựa chọn tốt nhất
          </Typography> */}
          <Typography fontSize={14} color="white">
            pricible@gmail.com
          </Typography>
          <Typography fontSize={14} color="white">
            (+84) 983 7211 942
          </Typography>
        </Stack>
        {/* RIGHT */}
        <Stack direction="row" gap="48px">
          <Stack gap="6px">
            <Typography fontSize={16} fontWeight={700} color="white">
              Chăm sóc khách hàng
            </Typography>
            <Typography fontSize={14} color="white">
              Trung Tâm Trợ Giúp
            </Typography>
            <Typography fontSize={14} color="white">
              Pricible blog
            </Typography>
            <Typography fontSize={14} color="white">
              Hướng Dẫn Mua Hàng
            </Typography>
            <Typography fontSize={14} color="white">
              Hướng Dẫn Đăng ký
            </Typography>
          </Stack>
          <Stack gap="6px">
            <Typography fontSize={16} fontWeight={700} color="white">
              Về chúng tôi
            </Typography>
            <Typography fontSize={14} color="white">
              Giới thiệu về Pricible
            </Typography>
            <Typography fontSize={14} color="white">
              Chính sách bảo mật
            </Typography>
            <Typography fontSize={14} color="white">
              Quảng cáo với Pricible
            </Typography>
          </Stack>
          <Stack gap="6px">
            <Typography fontSize={16} fontWeight={700} color="white">
              Theo dõi
            </Typography>
            <Typography fontSize={14} color="white">
              Facebook
            </Typography>
            <Typography fontSize={14} color="white">
              Instagram
            </Typography>
            <Typography fontSize={14} color="white">
              Tiktok
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap="24px">
        <Divider color="white" />
        <Typography fontSize={12} color="white">
          2023 Pricible Inc. All right reserved
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
