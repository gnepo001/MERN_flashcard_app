import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./styles.js";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.logo}>Flash Card App</Typography>
        <Button color="inherit">
          <AddIcon className={classes.button} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
