import React from 'react';
import {
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  select: {
    marginBottom: theme.spacing(1),
  },
}));

const Select = ({
  id, label, action, options,
}) => {
  const classes = useStyles();
  return (
    <TextField
      id={id}
      className={classes.select}
      select
      label={label}
      onChange={(event) => action(event.target.value)}
      SelectProps={{
        native: true,
      }}
      variant="outlined"
      size="small"
      color="primary"
    >
      {
        options.map((option) => (
          <option key={option.key} value={option.value}>{option.text}</option>
        ))
      }
    </TextField>
  );
};

export default Select;

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  action: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
};
Select.defaultProps = {
  id: '',
  label: '',
  action: () => {},
  options: [],
};
