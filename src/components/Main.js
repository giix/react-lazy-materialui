import React from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import { getRoutes } from "../utils/routeUtil";
import Home from "../scenes/Home";

const ROUTES = getRoutes();

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
});

const useStyle = makeStyles(styles);

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={3} justify={"center"}>
      <Grid item xl={10} lg={10} className={classes.root}>
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
      </Grid>
    </Grid>
  );
};

export default Main;
