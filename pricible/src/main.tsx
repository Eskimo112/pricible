import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./feature/home/Home.page";
import Search from "./feature/search/Search.page";
import SignIn from "./feature/auth/SignIn";
import theme from "./theme";
import SignUp from "./feature/auth/SignUp";
import ProductDetail from "./feature/product/Product.page";
import { SnackbarProvider } from "notistack";
import { AppSnackBar } from "./components/SnackBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
  {
    path: "/products/:id", // Specify the path with a parameter placeholder ":id"
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        maxSnack={3}
        Components={{ default: AppSnackBar }}
        autoHideDuration={3000}
      >
        <Box padding="0px 40px">
          <RouterProvider router={router} />
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
