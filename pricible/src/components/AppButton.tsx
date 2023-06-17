import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: "none",
  padding: "4px",
  whiteSpace: "nowrap",
  minWidth: 0,
  // color: "white",

  "& .": {},
}));

export default function AppButton(props: ButtonProps) {
  return <StyledButton {...props} />;
}
