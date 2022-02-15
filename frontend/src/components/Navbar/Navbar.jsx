import React, { useState } from "react";
import { Popover, Button, AppBar, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./styles.js";

import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCardForm from "../AddCardForm/AddCardForm.jsx";

const Navbar = () => {
  const classes = useStyles();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
        <Typography className={classes.navbar_logo}>Flash Card App</Typography>
        <div className={classes.navbar_options}>
          <a className={classes.navbar_links}>
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
            className={classes.navbar_popover}
          >
            <AddCardForm />
          </Popover>
          <Button color="inherit">
            <SettingsIcon />
          </Button>
        </div>
        <div className={classes.navbar_menu}>
          <Button color="inherit">
            <MenuIcon onClick={() => setToggleMenu(true)} />
          </Button>
          {toggleMenu && (
            <div className={classes.navbar_smallscreen_overlay}>
              <MenuIcon
                className={classes.navbar_smallscreen_button}
                onClick={() => setToggleMenu(false)}
              />
              <ul className={classes.navbar_smallscreen_links}>
                <li>
                  <a>Add</a>
                </li>
                <li>
                  <a>Practice</a>
                </li>
                <li>
                  <a>Account</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
