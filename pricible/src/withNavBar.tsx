import { Box } from "@mui/material";
import React, { ComponentType, ReactElement } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const withNavbar = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  return (props: P): ReactElement => (
    <Box>
      <Box padding="0px 40px" paddingBottom="80px">
        <NavBar />
        <WrappedComponent {...props} />
      </Box>
      <Footer />
    </Box>
  );
};

export default withNavbar;
