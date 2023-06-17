import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";
import { SnackbarProvider } from "notistack";
import { AppSnackBar } from "./components/SnackBar";
import HomePage from "./feature/home/Home.page";
import SearchPage from "./feature/search/Search.page";
import SignUp from "./feature/auth/SignUp";
import SignIn from "./feature/auth/SignIn";
import ProductPage from "./feature/product/Product.page";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
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
    path: "/product/:id", // Specify the path with a parameter placeholder ":id"
    element: <ProductPage />,
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
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
