import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: "none",
  padding: "8px 30px",
  whiteSpace: "nowrap",
  color: "white",
  "& .": {},
}));

export default function AppButton(props: ButtonProps) {
  return <StyledButton {...props} />;
}
