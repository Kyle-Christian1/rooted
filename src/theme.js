import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#346186", // Primary color
    },
    secondary: {
      main: "#53798a", // Secondary color
    },
    background: {
      default: "#fcf8f4", // Page background
      paper: "#ffffff", // Background for cards or surfaces
    },
    text: {
      primary: "#346186", // Primary text color
      secondary: "#AAB99A", // Secondary text color
    },
  },
});

export default theme;
