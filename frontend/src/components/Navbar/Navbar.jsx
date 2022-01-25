import React from "react";
import { AppBar, Typography } from "@mui/material";
import useStyles from "./styles.js";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Typography className={classes.logo}>Quiz App</Typography>
    </AppBar>
  );
};

export default Navbar;
