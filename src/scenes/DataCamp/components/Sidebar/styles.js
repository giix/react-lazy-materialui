const styles = theme => ({
  root: {
    width: "220px",
    height: "calc(100vh - 88px)",
    top: "64px",
    left: "0px",
    backgroundColor: "#33AACC"
  },
  headline: {
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "center"
  },
  subscriptionWrapper: {
    textAlign: "center",
    lineHeight: "36px"
  },
  subscriptionIcon: {
    color: "yelow"
  },
  subscriptionLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "8px",

    "&:hover": {
      color: "yelow"
    }
  }
});

export default styles;
