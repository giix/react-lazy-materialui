import React from "react";
import SimpleCard from "./SimpleCard";
import Grid from "@material-ui/core/Grid";

const array = Array.from(new Array(10).keys());

const notes = [
  {
    date: "10/10/2019",
    content: "ghi"
  }
];

function PaperSheet(props) {
  return (
    <Grid container spacing={3} justify={"center"}>
      {notes.map(elem => (
        <Grid key={elem} item xl={2} lg={3}>
          <SimpleCard note={elem} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PaperSheet;
