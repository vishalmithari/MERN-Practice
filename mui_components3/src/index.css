import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";


// 1. CREATE THEME

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});


// 2. CREATE ROOT

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


// 3. APPLY THEME

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);