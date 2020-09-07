import React from 'react';
import {
  Grid,
  LinearProgress,
  Box,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import Question from '../Question';

const Questions = ({ questions, loading }) => (
  loading || (questions === undefined || questions === null || questions.length === 0)
    ? (
      <Box>
        <LinearProgress />
        <Alert severity="info">No Data available!</Alert>
      </Box>
    )
    : (
      <Grid container spacing={2}>
        {
        questions && questions.map((question) => (
          <Question
            key={question.url}
            question={question}
          />
        ))
        }
      </Grid>
    )
);

export default Questions;

Questions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  questions: PropTypes.array,
  loading: PropTypes.bool,
};
Questions.defaultProps = {
  questions: [],
  loading: false,
};
