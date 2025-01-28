import { Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import AppBar from "./AppBar";
import Grid from "@mui/material/Grid2";
import ImageOverlay from "./ImageOverlay";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  height: "15rem",
  paddingLeft: "1rem",
  fontSize: "1.5rem",
  wordWrap: "wrap",
  paddingLeft: "3rem",
  paddingRight: "3rem",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        margin: "0",
        backgroundColor: "background: default",
      }}
    >
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
          A Balanced Life Begins at <span class="home">Home</span>
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
      <Box mt={2} sx={{ flexGrow: 1 }}>
        <ImageOverlay />
      </Box>

      <Box mt={2} sx={{ flexGrow: 1, width: "100vw", textAlign: "center" }}>
        <Grid
          container
          sx={{
            "--Grid-borderWidth": "2px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
            width: "100%",
          }}
        >
          <Grid
            item
            size={{ xs: 12, md: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "15rem",
              backgroundColor: "secondary.main",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: "background.paper" }}
            >
              What I Specialize In
            </Typography>
          </Grid>
          <StyledGrid item className="specialties" size={{ xs: 12, md: 3 }}>
            Mindful Living
          </StyledGrid>
          <StyledGrid item className="specialties" size={{ xs: 12, md: 3 }}>
            Healthier Homes
          </StyledGrid>
          <StyledGrid item className="specialties" size={{ xs: 12, md: 3 }}>
            Balanced Homemaking
          </StyledGrid>
          <StyledGrid item className="specialties" size={{ xs: 12, md: 3 }}>
            Event Planning & Virtual Personal Assistance
          </StyledGrid>
        </Grid>
      </Box>

      <Button
        onClick={handleButtonClick}
        variant="contained"
        size="large"
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          borderRadius: "8px",

          boxShadow: 24, // MUI's boxShadow system values
          "&:hover": {
            boxShadow: 6, // Increase shadow on hover
          },
        }}
      >
        Message me
      </Button>
    </Box>
  );
};

export default Home;
