import React from "react";
import SimpleCard from "./SimpleCard";
import Grid from "@material-ui/core/Grid";

function PaperSheet(props) {
  return (
    <Grid container spacing={24} justify={"center"}>
      <Grid item xl={2} lg={3}>
        <SimpleCard />
      </Grid>
      <Grid item xl={2} lg={3}>
        <SimpleCard />
      </Grid>
      <Grid item xl={2} lg={3}>
        <SimpleCard />
      </Grid>
      <Grid item xl={2} lg={3}>
        <SimpleCard />
      </Grid>
    </Grid>
  );
}

export default PaperSheet;
