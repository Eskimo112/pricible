import { Radio, RadioProps } from "@mui/material";
import { styled } from "@mui/material/styles";

type CustomProps = {
  haha?: string;
};

const StyledRadio = styled(Radio)<RadioProps & CustomProps>(({ theme }) => ({
  padding: "4px",
}));

export default function AppRadio(props: CustomProps & RadioProps) {
  return <StyledRadio {...props} />;
}
