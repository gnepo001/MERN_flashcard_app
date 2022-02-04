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
        <div className={classes.options}>
          <a href="#" className={classes.app__navbar_links}>
            <Typography>Practice</Typography>
          </a>
          <Button color="inherit">
            <AddIcon className={classes.button} />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
