import { Box } from "@mui/material";
import { ComponentType, ReactElement } from "react";
import EcommerceIllustration from "../public/Ecommerce2.png";
const withIllustration = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  return (props: P): ReactElement => (
    <Box width="100%" display="flex" alignItems="center" minHeight="100vh">
      <Box display="flex" flex="1" justifyContent="center" alignItems="center">
        <img
          style={{ width: "70%" }}
          src={EcommerceIllustration}
          alt="Ecommerce Illustration"
        />
      </Box>
      <Box display="flex" flex="1" justifyContent="center" alignItems="center">
        <WrappedComponent {...props} />
      </Box>
    </Box>
  );
};

export default withIllustration;
