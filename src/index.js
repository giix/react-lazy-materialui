import React, { Suspense } from "react";
import { render } from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const Application = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </MuiThemeProvider>
);

render(<Application />, document.getElementById("root"));
