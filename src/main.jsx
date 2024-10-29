import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
   palette: {
      secondary: red,
   },
   typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
   },
});

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </StrictMode>
);
