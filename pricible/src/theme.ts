import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#07a2be",
      light: "#e6fafd",
      9: "#20abc5",
      8: "#39b5cb",
      7: "#51bed2",
      6: "#6ac7d8",
      5: "#83d1df",
      4: "#9cdae5",
      3: "#b5e3ec",
      2: "#cdecf2",
      1: "#e6f6f9",
    },
    text: {
      primary: "#383838",
      0: "#383838",
      1: "#676E7B",
      2: "#9198A0",
      3: "#B1B8C0",
      4: "#D1D6DA",
      5: "#FFFFFF",
    },
    neutral: {
      main: "#FFFFFF", // TODO: update later
      0: "#202020",
      1: "#353C49",
      2: "#505866",
      3: "#B1B8C0",
      4: "#D9E0E8",
      5: "#F2F4F6",
      6: "#F8F8F9",
      7: "#FFFFFF",
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
