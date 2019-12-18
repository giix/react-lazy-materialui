const styles = theme => ({
  root: {
    width: "100%",
    position: "relative",
    marginTop: `calc(72px - ${theme.spacing(2)}px)`
  },
  sideBarPanel: {
    position: "fixed"
  },
  rightPanel: {
    marginLeft: "220px",
    width: "100%",
    height: "10000px"
  }
});

export default styles;
