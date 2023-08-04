import { Box, BoxProps, Typography, useTheme } from "@mui/material";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

type CustomProps = {
  size?: number;
};

export default function AppIcon({
  size = 40,
  ...props
}: CustomProps & BoxProps) {
  const theme = useTheme();
  return (
    <Box
      component={Link}
      to="/"
      display="flex"
      alignItems="baseline"
      sx={{ textDecoration: "none!important" }}
      {...props}
    >
      <ImSearch
        size={size}
        style={{
          marginRight: "-4px",
          transform: "rotate(70deg)",
          color: theme.palette.primary.main,
        }}
      />
      <Typography
        fontWeight={700}
        fontSize={`${size - 14}px`}
        color={props.color ?? theme.palette.text.primary}
      >
        ricible
      </Typography>
    </Box>
  );
}
