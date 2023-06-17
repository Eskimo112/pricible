import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

type CustomProps = {
  backgroundColor?: string;
};

const StyledTextField = styled(TextField)<TextFieldProps & CustomProps>(
  ({ backgroundColor = "white", theme }) => ({
    background: backgroundColor,
    borderRadius: "12px",

    //   "& label.Mui-focused": {
    //     color: "red",
    //   },
    "& .MuiInputBase-input": {},
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        //   background: "white",
        border: "none",
        borderRadius: "12px",
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
