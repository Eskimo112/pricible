import { Box, Stack } from "@mui/material";
import { ComponentType, ReactElement } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const withNavbar = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  return (props: P): ReactElement => (
    <Stack minHeight="100vh">
      <NavBar />
      <Box padding="0px 40px" paddingBottom="80px" flex="1">
        <WrappedComponent {...props} />
      </Box>
      <Footer />
    </Stack>
  );
};

export default withNavbar;
