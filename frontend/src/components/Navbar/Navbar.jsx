import React, { useState } from "react";
import { Popover, Button, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
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
        <div className={classes.navbar_logo}>
          <Button color="inherit" component={Link} to="/">
            Flash Card App
          </Button>
        </div>
        <div className={classes.navbar_options}>
          <Button
            component={Link}
            to="/practice"
            variant="none"
            color="primary"
          >
            Practice
          </Button>
          <Button
            component={Link}
            to="/matchingGame"
            variant="none"
            color="primary"
          >
            Match
          </Button>
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
                  <Button onClick={() => setToggleMenu(false)}>Add</Button>
                </li>
                <li>
                  <Button
                    component={Link}
                    to="/practice"
                    onClick={() => setToggleMenu(false)}
                  >
                    Practice
                  </Button>
                </li>
                <li>
                  <Button
                    component={Link}
                    to="/matchingGame"
                    onClick={() => setToggleMenu(false)}
                  >
                    Matching
                  </Button>
                </li>
                <li>
                  <Button>About</Button>
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
