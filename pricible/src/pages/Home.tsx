import { Box } from "@mui/material";
import Banner from "../components/home/Banner";
import withNavbar from "../withNavBar";

const Home = () => {
  return (
    <Box>
      <Banner />
    </Box>
  );
};

export default withNavbar(Home);
