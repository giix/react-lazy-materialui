import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: "5px",
    float: "right"
  },
  input: {
    display: "none"
  }
});

class Header extends React.Component {
  state = {
    value: 0,
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <Grid container spacing={24} justify={"center"}>
        <Grid item xl={10} lg={10} className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                <Link style={{ textDecoration: "none" }} to="/">
                  ET
                </Link>
              </Typography>
              <Grid item xl={10} className={classes.root}>
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="add"
                  mini
                  aria-owns={anchorEl ? "simple-menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  className={classes.button}
                >
                  <AddIcon />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>New ticket</MenuItem>
                  <MenuItem onClick={this.handleClose}>New note</MenuItem>
                </Menu>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
