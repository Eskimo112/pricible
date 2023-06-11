import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#07a2be",
      light: "#e6fafd",
    },
    text: {
      primary: "#383838",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Nunito Sans, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
