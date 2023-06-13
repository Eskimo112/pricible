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
    success: {
      main: "#12c71e",
    },
    error: {
      main: "#c71212",
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
  shadows: [
    "none",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  ],
});

export default theme;
