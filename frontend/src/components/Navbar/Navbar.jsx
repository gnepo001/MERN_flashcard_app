import React from "react";
import { Popover, Button, AppBar, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./styles.js";

import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCardForm from "../AddCardForm/AddCardForm.jsx";

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.logo}>Flash Card App</Typography>
        <div className={classes.options}>
          <a href="#" className={classes.app__navbar_links}>
            <Typography>Practice</Typography>
          </a>
          <Button color="inherit" aria-describedby={id} onClick={handleClick}>
            <AddIcon />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            className={classes.app__navbar_popover}
          >
            <AddCardForm />
          </Popover>
          <Button color="inherit">
            <SettingsIcon />
          </Button>
        </div>
        <div className={classes.menu}>
          <Button color="inherit">
            <MenuIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
