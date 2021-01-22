import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
  title: { marginLeft: 40, color: "white" },
}));

const TopBar = ({ className, onMobileNavOpen, onIsAuthenticated, ...rest }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
        <Toolbar>
          <RouterLink to='/'>
            <Typography variant='h2' className={classes.title}>
              Search For Countries
            </Typography>
          </RouterLink>

          <Box flexGrow={1} />
          <Hidden lgUp>
            <IconButton color='inherit' onClick={onMobileNavOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  onIsAuthenticated: PropTypes.func,
};
export default TopBar;
