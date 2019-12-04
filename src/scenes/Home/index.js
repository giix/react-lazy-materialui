import React from "react";
import { Link } from "react-router-dom";
import { getRoutes } from "../../utils/routeUtil";

const routes = getRoutes();

const Home = () => (
  <div>
    <nav>
      {routes.map(routeInfo => {
        return (
          <div>
            <Link to={routeInfo.path}>{routeInfo.label}</Link>
          </div>
        );
      })}
    </nav>
  </div>
);

export default Home;
