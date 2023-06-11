import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import AppIcon from "../components/AppIcon";
import AppButton from "../components/general/AppButton";
import AppTextField from "../components/general/AppTextField";
import withIllustration from "../withIllustration";

const SignIn = () => {
  const theme = useTheme();
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
          fullWidth
          placeholder="Email"
          backgroundColor={theme.palette.primary.light}
        />
        <Stack gap="8px">
          <AppTextField
            fullWidth
            placeholder="Password"
            backgroundColor={theme.palette.primary.light}
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
                label="Nho mat khau"
                componentsProps={{
                  typography: {
                    fontSize: "14px",
                  },
                }}
                sx={{ marginLeft: "0px" }}
              />
            </Box>
            <Typography fontSize="14px">Quen mat khau?</Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack gap="16px" width="100%">
        <AppButton
          fullWidth
          variant="contained"
          sx={{ paddingY: "12px", fontSize: "16px" }}
        >
          Sign in
        </AppButton>
        <Typography fontSize="14px" color={theme.palette.text.secondary}>
          hoac
        </Typography>
        <AppButton
          fullWidth
          variant="outlined"
          sx={{ color: theme.palette.primary.main }}
        >
          Sign in with google
        </AppButton>
      </Stack>

      <Typography
        fontSize="14px"
        color={theme.palette.text.secondary}
        textTransform="none"
      >
        Chua co tai khoan?{" "}
        <Link
          to="/auth/signup"
          style={{
            fontWeight: "700",
            textTransform: "none",
            color: theme.palette.primary.main,
          }}
        >
          Dang ky{" "}
        </Link>
      </Typography>
    </Stack>
  );
};

export default withIllustration(SignIn);
