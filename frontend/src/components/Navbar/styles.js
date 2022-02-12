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
    "@media (max-width:499px)": {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
  menu: {
    "@media (min-width:499px)": {
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
  app__navbar_popover: {
    marginTop: "20px",
  },

  smallscreen_button: {
    margin: "16px 10px 10px 323px",
    color: "black",
  },

  app__navbar_smallscreen_overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    transition: "0.5s ease",
    flexDirection: "column",
  },

  smallscreen_links: {
    listStyle: "none",
    margin: "2rem",
    cursor: "pointer",
    fontSize: "2rem",
    textAlign: "center",
    textDecoration: "none",
    color: "black",
  },
}));
