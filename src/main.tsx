import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme.ts";
import { RouterProvider } from "react-router-dom";
import Router from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
);
