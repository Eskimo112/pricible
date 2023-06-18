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
    "& .MuiInputLabel-root": {
      color: theme.palette.text.secondary,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderRadius: "12px",
      },
      // "&:hover fieldset": {},
      "&.Mui-focused fieldset": {
        border: `2px solid ${theme.palette.primary.main}`,
      },
    },
    "& .MuiFormHelperText-root": {
      color: theme.palette.error.main,
    },
    "& .Mui-error": {
      borderColor: `${theme.palette.error.main}!important`,
    },
  })
);

export default function AppTextField(props: CustomProps & TextFieldProps) {
  return <StyledTextField {...props} />;
}
