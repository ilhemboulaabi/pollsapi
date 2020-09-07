import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  LinearProgress,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  media: {
    width: 140,
  },
}));

const Question = ({ question, loading }) => {
  const classes = useStyles();

  return (
    loading
      ? <LinearProgress />
      : (
        <Grid item xs={12}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.media}
              image="https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_960_720.jpg"
              title="Contemplative Reptile"
            />
            <div className={classes.container}>
              <CardContent>
                <Typography component="h5" variant="h5">
                  {question.question}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {Moment(question.published_at).format('d MMM yyyy')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={`${question.url}`}>Vote here!</Link>
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
      )
  );
};

export default Question;

Question.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object,
  loading: PropTypes.bool,
};
Question.defaultProps = {
  question: {},
  loading: false,
};
