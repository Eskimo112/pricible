import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

type CustomProps = {
  backgroundColor?: string;
};

const StyledTextField = styled(TextField)<TextFieldProps & CustomProps>(
  ({ backgroundColor = "white", theme }) => ({
    //   "& label.Mui-focused": {
    //     color: "red",
    //   },
    "& .MuiInputBase-input": {
      background: backgroundColor,
      borderRadius: "16px",
      padding: "16px 20px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        //   background: "white",
        border: "none",
        borderRadius: "16px",
      },
      // "&:hover fieldset": {},
      "&.Mui-focused fieldset": {
        border: `2px solid ${theme.palette.primary.main}`,
      },
    },
    "& .Mui-error": {
      borderColor: `${theme.palette.error.main}!important`,
    },
  })
);

export default function AppTextField(props: CustomProps & TextFieldProps) {
  return <StyledTextField {...props} />;
}
