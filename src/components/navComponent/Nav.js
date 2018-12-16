import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Nav(props) {
  const { classes } = props;
  const { isAuthenticated, login, logout } = props.auth;
  //const { isAuthenticated, login, logout } = this.props.auth;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            component={Link}
            to="/profile"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}
            component={Link}
            to="/"
          >
            Home
          </Typography>
          <Button color="inherit" onClick={isAuthenticated() ? logout : login}>
            {isAuthenticated() ? "Log Out" : "Log In"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
