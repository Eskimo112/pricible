import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AppIcon from "../../components/AppIcon";
import AppButton from "../../components/AppButton";
import AppTextField from "../../components/AppTextField";
import withIllustration from "../../withIllustration";
import { useState } from "react";
import { useAuth } from "./useAuth";
import useAuthStore from "../../stores/auth";
import { toastError, toastSuccess } from "../../notification";

const SignIn = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, loading } = useAuth();
  const { setUser } = useAuthStore((state) => state);

  const handleSubmit = async () => {
    await login({ email: email, password: password })
      .then((user) => {
        setUser(user);
        toastSuccess("Đăng nhập thành công");
        navigate("/");
      })
      .catch((error) => {
        toastError(error);
      });
  };

  if (loading) return <CircularProgress size={18} />;

  return (
    <Stack gap="40px" width="60%" alignItems="center" textAlign="center">
      <AppIcon size={40} marginBottom="-10px" />
      <Stack gap="8px">
        <Typography variant="h5" fontWeight={700}>
          Chao mung quay lai!
        </Typography>
        <Typography variant="body1">
          Luon dem den cho ban nhung su lua chon tot nhat
        </Typography>
      </Stack>
      <Stack gap="16px" width="100%">
        <AppTextField
          value={email}
          fullWidth
          placeholder="Email"
          backgroundColor={theme.palette.primary.light}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Stack gap="8px">
          <AppTextField
            value={password}
            fullWidth
            placeholder="Mật khẩu"
            type="password"
            backgroundColor={theme.palette.primary.light}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            display="flex"
            flex="1"
            justifyContent="space-between"
            alignItems="center"
            padding="0px"
            color={(theme) => theme.palette.text.secondary}
          >
            <Box>
              <FormControlLabel
                control={<Checkbox size="small" sx={{ padding: "4px" }} />}
                label="Nhớ mật khẩu"
                componentsProps={{
                  typography: {
                    fontSize: "14px",
                  },
                }}
                sx={{ marginLeft: "0px" }}
              />
            </Box>
            {/* <Typography fontSize="14px">Quen mat khau?</Typography> */}
          </Box>
        </Stack>
      </Stack>
      <Stack gap="16px" width="100%">
        <AppButton
          fullWidth
          variant="contained"
          sx={{ paddingY: "12px", fontSize: "16px" }}
          onClick={handleSubmit}
        >
          Đăng nhập
        </AppButton>
        {/* <Typography fontSize="14px" color={theme.palette.text.secondary}>
          hoac
        </Typography>
        <AppButton
          fullWidth
          variant="outlined"
          sx={{ color: theme.palette.primary.main }}
        >
          Sign in with google
        </AppButton> */}
      </Stack>

      <Typography
        fontSize="14px"
        color={theme.palette.text.secondary}
        textTransform="none"
      >
        Chưa có tài khoản?{" "}
        <Link
          to="/auth/signup"
          style={{
            fontWeight: "700",
            textTransform: "none",
            color: theme.palette.primary.main,
          }}
        >
          Đăng ký
        </Link>
      </Typography>
    </Stack>
  );
};

export default withIllustration(SignIn);
