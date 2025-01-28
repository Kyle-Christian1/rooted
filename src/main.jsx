import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AboutPage from "./components/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/coaching",
    element: <ContactPage />,
  },
  {
    path: "/event-planning",
    element: <Home />,
  },
  {
    path: "/personal-assistance",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
