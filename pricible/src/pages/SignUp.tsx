import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AppIcon from "../components/AppIcon";
import AppButton from "../components/general/AppButton";
import AppTextField from "../components/general/AppTextField";
import withIllustration from "../withIllustration";

const SignUp = () => {
  const theme = useTheme();
  return (
    <Stack gap="40px" width="60%" alignItems="center" textAlign="center">
      <AppIcon size={40} marginBottom="-10px" />
      <Stack gap="8px">
        <Typography variant="h5" fontWeight={700}>
          Dang ky tai khoan
        </Typography>
        <Typography variant="body1">Bat dau mua sam</Typography>
      </Stack>
      <Stack gap="16px" width="100%">
        <AppTextField
          fullWidth
          placeholder="Email"
          backgroundColor={theme.palette.primary.light}
        />
        <AppTextField
          fullWidth
          placeholder="Password"
          backgroundColor={theme.palette.primary.light}
        />
        <AppTextField
          fullWidth
          placeholder="Password"
          backgroundColor={theme.palette.primary.light}
        />

        <Stack gap="8px">
          <AppTextField
            fullWidth
            placeholder="Password"
            backgroundColor={theme.palette.primary.light}
          />
          <Box>
            <FormControlLabel
              control={<Checkbox size="small" sx={{ padding: "4px" }} />}
              label="Toi dong y voi cac dieu khoan trong chinh sach rieng tu"
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
        >
          Sign in
        </AppButton>
      </Stack>
    </Stack>
  );
};

export default withIllustration(SignUp);
