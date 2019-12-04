import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  }
});

class RT extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "Ticket #",
                  accessor: "firstName"
                },
                {
                  Header: "Issue",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Comments",
                  accessor: "visits"
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Priority",
                  accessor: "visits"
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Severity",
                  accessor: "status"
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Requested By",
                  accessor: "visits"
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Created Date",
                  accessor: "age"
                }
              ]
            },
            {
              columns: [
                {
                  Header: "Resolved Date",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={20}
          style={{
            height: "650px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

export default withStyles(styles)(RT);
