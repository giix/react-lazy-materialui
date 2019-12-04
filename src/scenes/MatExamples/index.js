import React from "react";
import { Button } from "@material-ui/core";
import { Switch, Route } from "react-router";

import { ROUTE_URLS } from "../../constants";
import { getRoutes } from "../../utils/routeUtil";

const exampleRouteInfo = getRoutes(ROUTE_URLS.EXAMPLES);
const childRouteInfos = exampleRouteInfo.children;

const MatExamples = () => {
  return (
    <div>
      <Button>Back to Home page</Button>
      <Switch>
        {childRouteInfos.map(routeInfo => (
          <Route
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
