import React from "react";
import { makeStyles } from "@material-ui/styles";

import Sidebar from "./components/Sidebar";
import styles from "./styles";

const useStyles = makeStyles(styles);

const DataCamp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sideBarPanel}>
        <Sidebar />
      </div>
      <div className={classes.rightPanel} />
    </div>
  );
};

export default DataCamp;
