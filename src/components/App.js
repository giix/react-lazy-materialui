import React from "react";
import Header from "./Header";
import Main from "./Main";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={3} justify={"center"}>
      <Header />
      <Main />
    </Grid>
  </div>
);

export default withStyles(styles)(App);
