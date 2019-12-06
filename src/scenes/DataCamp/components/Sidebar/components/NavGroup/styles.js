const styles = theme => ({
  root: {
    paddingBottom: "1rem"
  },
  title: {
    textTransform: "uppercase",
    backgroundColor: "#195B73",
    color: "#7ECCE2",
    lineHeight: "36px",
    fontSize: "14px",
    fontWeight: "700",
    textAlign: "center",
    margin: 0
  },
  itemWrapper: {
    width: "100%",
    lineHeight: "40px",
    "& a": {
      display: "block",
      width: "100%",
      textDecoration: "none",

      "&.active": {
        backgroundColor: "#55AECB",
        "& $itemIcon": {
          color: "white"
        }
      }
    },
    "&:hover": {
      backgroundColor: "#55AECB",
      "& $itemIcon": {
        color: "white"
      }
    },
    borderBottom: "1px solid #33AACC"
  },
  itemIcon: {
    padding: "0 8px 0 16px"
  },
  itemText: { color: "white" }
});

export default styles;
