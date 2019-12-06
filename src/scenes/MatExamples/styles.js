const styles = theme => ({
  root: {
    width: "100%"
  },
  navigationBar: {
    display: "flex",
    justifyContent: "center",

    fontWeight: "600",

    "& a": {
      textDecoration: "none",
      color: "#2196f3",
      "&:hover": {
        color: "orange"
      },
      "&.active": {
        color: "#1976d2"
      }
    },
    "& a+a": {
      paddingLeft: "16px"
    }
  }
});

export default styles;
