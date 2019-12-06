import React from "react";
import NavGroup from "./components/NavGroup";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles";
import { ROUTE_URLS } from "../../../../constants";

const GROUPS = [
  {
    title: "community",
    items: [
      {
        path: `${ROUTE_URLS.DATA_CAMP}/#news`,
        name: "News",
        icon: "far fa-newspaper"
      },
      {
        path: `${ROUTE_URLS.DATA_CAMP}/#resource-center`,
        name: "Resource Center",
        icon: "far fa-newspaper"
      },
      {
        path: `${ROUTE_URLS.DATA_CAMP}/#cheat-sheets`,
        name: "Cheat Sheets",
        icon: "far fa-newspaper"
      },
      {
        path: `${ROUTE_URLS.DATA_CAMP}/#open-courses`,
        name: "Open Courses",
        icon: "far fa-newspaper"
      },
      {
        path: `${ROUTE_URLS.DATA_CAMP}/#podcast`,
        name: "Podcast",
        icon: "far fa-newspaper"
      },
      {
        path: `${ROUTE_URLS.DATA_CAMP}/#chat`,
        name: "Chat",
        icon: "far fa-newspaper"
      }
    ]
  },
  {
    title: "datacamp",
    items: [
      {
        path: "#blog",
        name: "Official Blog",
        icon: "far fa-newspaper"
      }
    ]
  }
];

const useStyles = makeStyles(styles);

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.headline}>DataCamp</div>
      {GROUPS.map(group => (
        <NavGroup key={group.title} group={group} />
      ))}
      <nav className={classes.footer}>
        <div className={classes.subscriptionWrapper}>
          <FontAwesomeIcon
            className={classes.subscriptionIcon}
            icon={["fas", "link"]}
          />
          <a
            classname={classes.subscriptionLink}
            href="https://www.datacamp.com/community/rss.xml"
          >
            Subscribe to RSS
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
