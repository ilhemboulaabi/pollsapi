import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Search from '../Search';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.grey[800],
  },
  toolBar: {
    padding: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 20, 0, 20),
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'inherit',
  },
}));

const TopBar = ({ handelSearch }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar className={classes.toolBar} disableGutters>
        <Typography className={classes.title} variant="h6" noWrap>
          POLLS
        </Typography>
        <Search handelSearch={handelSearch} />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

TopBar.propTypes = {
  handelSearch: PropTypes.func,
};
TopBar.defaultProps = {
  handelSearch: () => {},
};
