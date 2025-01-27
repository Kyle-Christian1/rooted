import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#727D73", // Primary color
    },
    secondary: {
      main: "#AAB99A", // Secondary color
    },
    background: {
      default: "#D0DDD0", // Page background
      paper: "#F0F0D7", // Background for cards or surfaces
    },
    text: {
      primary: "#727D73", // Primary text color
      secondary: "#AAB99A", // Secondary text color
    },
  },
});

export default theme;
