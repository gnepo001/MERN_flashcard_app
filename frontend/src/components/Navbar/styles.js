import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  Navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    flexGrow: "1",
  },
  options: {
    display: "flex",
    alignItems: "center",
  },
  app__navbar_links: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "yellow",
    },
  },
}));
