import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AppIcon from "../../components/AppIcon";
import AppButton from "../../components/AppButton";
import AppTextField from "../../components/AppTextField";
import withIllustration from "../../withIllustration";
import { useState } from "react";
import { useAuth } from "./useAuth";
import { toastError, toastSuccess } from "../../notification";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils";

const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(true);
  const [helper, setHelper] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useAuth();

  const handleSubmit = async () => {
    if (!name) {
      setHelper({ ...helper, name: "Vui lòng nhập họ và tên" });
      return;
    }
    if (!email) {
      setHelper({ ...helper, email: "Vui lòng nhập email" });
      return;
    }
    if (!password || password.length < 3) {
      setHelper({ ...helper, password: "Mật khẩu phải có ít nhất 3 ký tự" });
      return;
    }
    if (confirmPassword !== password) {
      setHelper({
        ...helper,
        confirmPassword: "Mật khẩu và xác nhận mật khẩu phải giống nhau",
      });
      return;
    }

    setHelper({ name: "", email: "", password: "", confirmPassword: "" });

    await signup({ name: name, email: email, password: password })
      .then(() => {
        toastSuccess("Đăng ký thành công. Xin mời đăng nhập");
        navigate("/auth/signin");
      })
      .catch((error) => {
        toastError(error);
      });
  };
  if (loading) return <CircularProgress size={40} />;
  return (
    <Stack gap="40px" width="60%" alignItems="center" textAlign="center">
      <AppIcon size={40} marginBottom="-10px" />
      <Stack gap="8px">
        <Typography variant="h5" fontWeight={700}>
          Đăng ký tài khoản
        </Typography>
        <Typography variant="body1">
          Bắt đầu hành trình tiêu dùng thông minh
        </Typography>
      </Stack>
      <Stack gap="16px" width="100%">
        <AppTextField
          value={name}
          fullWidth
          helperText={helper.name}
          label="Họ và tên"
          backgroundColor={theme.palette.primary.light}
          onChange={(e) => setName(e.target.value)}
        />
        <AppTextField
          value={email}
          fullWidth
          helperText={helper.email}
          label="Email"
          backgroundColor={theme.palette.primary.light}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AppTextField
          value={password}
          type="password"
          helperText={helper.password}
          fullWidth
          label="Mật khẩu"
          backgroundColor={theme.palette.primary.light}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Stack gap="8px">
          <AppTextField
            helperText={helper.confirmPassword}
            type="password"
            value={confirmPassword}
            fullWidth
            label="Xác nhận mật khẩu"
            backgroundColor={theme.palette.primary.light}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  value={agree}
                  onChange={() => setAgree(!agree)}
                  size="small"
                  sx={{ padding: "4px" }}
                />
              }
              label="Tôi đồng ý với các điều khoản trong chính sách riêng tư"
              componentsProps={{
                typography: {
                  fontSize: "14px",
                },
              }}
              sx={{ marginLeft: "0px" }}
            />
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
          Đăng ký
        </AppButton>
      </Stack>
      <Typography
        fontSize="14px"
        color={theme.palette.text.secondary}
        textTransform="none"
      >
        Đã có tài khoản{" "}
        <Link
          to="/auth/signin"
          style={{
            fontWeight: "700",
            textTransform: "none",
            color: theme.palette.primary.main,
          }}
        >
          Đăng nhập
        </Link>
      </Typography>
    </Stack>
  );
};

export default withIllustration(SignUp);
