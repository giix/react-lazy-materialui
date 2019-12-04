import React from "react";
import Header from "./Header";
import Main from "./Main";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const App = props => (
  <div className={props.root}>
    <Grid container spacing={24} justify={"center"}>
      <Header />
      <Main />
    </Grid>
  </div>
);

export default withStyles(styles)(App);
