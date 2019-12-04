import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { getRoutes } from "./utils/routeUtil";
import Home from "./scenes/Home";

const ROUTES = getRoutes();

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Grid container spacing={24} justify={"center"}>
    <Grid item xl={10} lg={10}>
      <main>
        <Suspense fallback={<div>Loading...</div>} />
        <Switch>
          <Route exact path="/" component={Home} />
          {ROUTES.map(routeInfo => (
            <Route
              key={routeInfo.path}
              exact={routeInfo.exact}
              path={routeInfo.path}
              component={routeInfo.component}
            />
          ))}
        </Switch>
      </main>
    </Grid>
  </Grid>
);

export default Main;
