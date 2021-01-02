import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Navbar from "react-bootstrap/Navbar";
import userService from "../services/UserService";
import { FormatAlignJustify } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
    textDecoration: "none",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className="bar">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
