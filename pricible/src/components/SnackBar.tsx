import React from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomContentProps, SnackbarContent } from "notistack";

interface AppSnackBarProps extends Omit<CustomContentProps, "id"> {
  icon?: React.ReactNode;
}

export const AppSnackBar = React.forwardRef(function AppSnackBar(
  { message, icon }: AppSnackBarProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <SnackbarContent ref={ref}>
      <Box
        display="flex"
        gap="10px"
        padding="14px 16px"
        sx={(theme) => ({
          boxShadow: theme.shadows[1],
          background: "white",
          borderRadius: 1,
        })}
      >
        <Box>{icon}</Box>
        <Typography variant="body2">{message}</Typography>
      </Box>
    </SnackbarContent>
  );
});
