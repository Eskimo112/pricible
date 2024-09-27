import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiLogInCircle, BiSearchAlt, BiUser } from "react-icons/bi";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AppIcon from "./AppIcon";
import { AiFillCheckCircle } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Stack
      padding="40px 60px"
      sx={(theme) => ({ background: theme.palette.primary[1] })}
      gap="50px"
    >
      <Stack justifyContent="space-between" direction="row">
        {/* LEFT */}
        <Stack gap="8px">
          <AppIcon />
          {/* <Typography
            component="h3"
            fontSize={26}
            fontWeight={700}
            color={theme.palette.text.primary}
          >
            Đưa bạn đến với sự lựa chọn tốt nhất
          </Typography> */}
          <Typography fontSize={14} color={theme.palette.text.primary}>
            pricible@gmail.com
          </Typography>
          <Typography fontSize={14} color={theme.palette.text.primary}>
            (+84) 983 7211 942
          </Typography>
        </Stack>
        {/* RIGHT */}
        <Stack direction="row" gap="48px">
          <Stack gap="6px">
            <Typography
              fontSize={16}
              fontWeight={700}
              color={theme.palette.text.primary}
            >
              Chăm sóc khách hàng
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Trung Tâm Trợ Giúp
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Pricible blog
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Hướng Dẫn Mua Hàng
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Hướng Dẫn Đăng ký
            </Typography>
          </Stack>
          <Stack gap="6px">
            <Typography
              fontSize={16}
              fontWeight={700}
              color={theme.palette.text.primary}
            >
              Về chúng tôi
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Giới thiệu về Pricible
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Chính sách bảo mật
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Quảng cáo với Pricible
            </Typography>
          </Stack>
          <Stack gap="6px">
            <Typography
              fontSize={16}
              fontWeight={700}
              color={theme.palette.text.primary}
            >
              Theo dõi
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Facebook
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Instagram
            </Typography>
            <Typography fontSize={14} color={theme.palette.text.primary}>
              Tiktok
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap="24px">
        <Divider color={theme.palette.text.primary} />
        <Typography fontSize={12} color={theme.palette.text.primary}>
          2023 Pricible Inc. All right reserved
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
