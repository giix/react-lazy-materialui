import React, { Suspense } from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import blue from "@material-ui/core/colors/blue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import App from "./components/App";

library.add(far, fab, fas);

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
