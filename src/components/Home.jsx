import { Divider, Typography } from "@mui/material";
import AppBar from "./AppBar";
import Grid from "./Grid";
import ImageOverlay from "./ImageOverlay";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{ width: "100vw", margin: "0" }}>
      <AppBar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
        mt={3}
        mb={3}
      >
        <Typography variant="h3" component="h1" color="text.primary" mb={2}>
          A Balanced Life Begins at <span>Home</span>
        </Typography>
        <Divider />
        <Typography
          variant="h5"
          component="h2"
          color="text.primary"
          marginBottom={1}
        >
          Online Coaching | Event & Personal Assistance with Josie Cook
        </Typography>
      </Box>
      <ImageOverlay mt={3} mb={3} />
      <Grid />
    </Box>
  );
};

export default Home;
