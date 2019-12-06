import React from "react";
import { Button } from "@material-ui/core";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { ROUTE_URLS } from "../../constants";
import { getRoutes } from "../../utils/routeUtil";
import styles from "./styles";

const exampleRouteInfo = getRoutes(ROUTE_URLS.EXAMPLES);
const childRouteInfos = exampleRouteInfo.children;

const useStyles = makeStyles(styles);

const MatExamples = props => {
  const classes = useStyles();
  const { history } = props;

  const handleGoHome = () => {
    history.push(ROUTE_URLS.HOME);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleGoHome}>Back to Home page</Button>
      <nav className={classes.navigationBar}>
        <NavLink to={ROUTE_URLS.STEPPER}>Stepper</NavLink>
        <NavLink to={ROUTE_URLS.MOBILE_STEPPER}>Mobile Stepper</NavLink>
      </nav>
      <Switch>
        {childRouteInfos.map(routeInfo => (
          <Route
            key={routeInfo.path}
            exact={routeInfo.exact}
            path={routeInfo.path}
            component={routeInfo.component}
          />
        ))}
      </Switch>
    </div>
  );
};

export default MatExamples;
