import { Box, BoxProps, Typography } from "@mui/material";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import theme from "../theme";

type CustomProps = {
  size?: number;
};

export default function AppIcon({
  size = 40,
  ...props
}: CustomProps & BoxProps) {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: theme.palette.primary.main,
      }}
    >
      <Box display="flex" alignItems="baseline" {...props}>
        <ImSearch
          size={size}
          style={{
            marginRight: "-4px",
            transform: "rotate(70deg)",
          }}
        />
        <Typography fontWeight={600} fontSize={`${size - 14}px`}>
          ricible
        </Typography>
      </Box>
    </Link>
  );
}
