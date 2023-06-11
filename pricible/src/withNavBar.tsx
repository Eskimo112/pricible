import { Box } from "@mui/material";
import React, { ComponentType, ReactElement } from "react";
import NavBar from "./components/NavBar";

const withNavbar = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  return (props: P): ReactElement => (
    <Box>
      <NavBar />
      <WrappedComponent {...props} />
    </Box>
  );
};

export default withNavbar;
