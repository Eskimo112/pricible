import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d3a02e",
      light: "#fff7ea",
      9: "#d7aa43",
      8: "#dcb358",
      7: "#e0bd6d",
      6: "#e5c682",
      5: "#e9d097",
      4: "#edd9ab",
      3: "#f2e3c0",
      2: "#f6ecd5",
      1: "#fff7ea",
    },
    text: {
      primary: "#49320a",
      secondary: "#a49985",
      0: "#49320a",
      1: "#5b4723",
      2: "#6d5b3b",
      3: "#807054",
      4: "#92846c",
      5: "#a49985",
    },
    neutral: {
      main: "#fff7ea", // TODO: update later
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
    allVariants: {
      color: "#49320a",
    },
    h6: {
      fontWeight: 700,
    },
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
