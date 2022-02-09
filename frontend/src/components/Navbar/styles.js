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
    ["@media (max-width:499px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
  menu: {
    ["@media (min-width:499px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },

  app__navbar_links: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "yellow",
    },
  },
}));
