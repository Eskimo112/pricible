import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)<ButtonProps>(({ theme, variant }) => ({
  textTransform: "none",
  padding: "4px",
  whiteSpace: "nowrap",
  minWidth: 0,
  ...(variant === "contained" && {
    color: theme.palette.neutral.main,
    ":hover": {
      boxShadow: theme.shadows[1],
    },
  }),

  "& .": {},
}));

export default function AppButton(props: ButtonProps) {
  return <StyledButton {...props} />;
}
