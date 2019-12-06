import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/styles";

import styles from "./styles";

const getIcon = iconName => {
  let icon = [];

  const array = iconName.trim().split(" ");
  if (array && array.length > 0 && array[0].startsWith("fa")) {
    array.forEach(elem => {
      if (elem.startsWith("fa-")) {
        icon.push(elem.substring(3));
      } else {
        icon.push(elem);
      }
    });
  } else {
    icon = ["fas", "bug"];
  }
  return <FontAwesomeIcon icon={icon} />;
};
const useStyles = makeStyles(styles);

const NavGroup = props => {
  const { group } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h5 className={classes.title}>{group.title}</h5>
      <nav>
        {group.items.map(item => (
          <div key={item.path} className={classes.itemWrapper}>
            <NavLink
              to={item.path}
              isActive={() => {
                return (
                  window.location.pathname + window.location.hash === item.path
                );
              }}
            >
              <span className={classes.itemIcon}>{getIcon(item.icon)}</span>
              <span className={classes.itemText}>{item.name}</span>
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

NavGroup.propTypes = {
  group: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        name: PropTypes.string,
        icon: PropTypes.string
      })
    ).isRequired
  })
};

export default NavGroup;
