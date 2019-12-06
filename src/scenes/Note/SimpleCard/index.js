import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const styles = {
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 280,
    marginTop: 20
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes, note } = props;
  const { date, content } = note;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {date}
        </Typography>
        <Typography variant="h6" component="h2">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete">
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  note: PropTypes.shape({
    date: PropTypes.string,
    content: PropTypes.string
  })
};

SimpleCard.defaultProps = {
  note: {
    date: "",
    content: ""
  }
};

export default withStyles(styles)(SimpleCard);
