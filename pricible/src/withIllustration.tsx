import { Box } from "@mui/material";
import { ComponentType, ReactElement } from "react";
import EcommerceIllustration from "../public/Ecommerce.png";
const withIllustration = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  return (props: P): ReactElement => (
    <Box width="100%" display="flex" alignItems="center" minHeight="100vh">
      <Box flex="1">
        <img
          width="100%"
          src={EcommerceIllustration}
          alt="Ecommerce Illustration"
        ></img>
      </Box>
      <Box display="flex" flex="1" justifyContent="center" alignItems="center">
        <WrappedComponent {...props} />
      </Box>
    </Box>
  );
};

export default withIllustration;
