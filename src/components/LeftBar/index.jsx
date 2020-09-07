import React from 'react';
import {
  makeStyles,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Select from '../Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing(2),
  },
  addButton: {
    marginBottom: theme.spacing(4),
  },
  link: {
    decoration: 'none',
    color: theme.palette.grey[800],
  },
}));

const LeftBar = ({ handelSort }) => {
  const classes = useStyles();
  const options = [
    {
      key: 'default',
      value: 'published_at',
      text: 'Select...',
    },
    {
      key: 'question',
      value: 'question',
      text: 'Question',
    },
  ];

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="default"
        className={classes.addButton}
        startIcon={<AddIcon />}
      >
        <Link to="/add" className={classes.link}>Add Question</Link>
      </Button>
      <Select
        id="sort"
        label="Sort Questions"
        action={handelSort}
        options={options}
      />
    </div>
  );
};

export default LeftBar;

LeftBar.propTypes = {
  handelSort: PropTypes.func,
};
LeftBar.defaultProps = {
  handelSort: () => {},
};
