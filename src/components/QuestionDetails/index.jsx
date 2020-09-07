import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  LinearProgress,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PropTypes from 'prop-types';
import connector from './connector';

export class QuestionDetails extends Component {
  componentDidMount() {
    const { match, actions } = this.props;
    actions.questionDetails.loadQuestionDetails(match.url);
  }

  render() {
    const { questionDetails, isQuestionDetailsLoading } = this.props;

    return (
      isQuestionDetailsLoading
        ? (
          <Box>
            <LinearProgress />
            <Alert severity="info">No Data available!</Alert>
          </Box>
        )
        : (
          <Box m={2}>
            <Typography component="h5" variant="h5">
              {questionDetails.question}
            </Typography>
            <List>
              {
                questionDetails.choices && questionDetails.choices.map((choice) => (
                  <ListItem key={choice.url}>
                    <ListItemAvatar>
                      <Avatar>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                          <ThumbUpIcon />
                        </IconButton>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={choice.choice} secondary={`${choice.votes} vote`} />
                  </ListItem>
                ))
              }
            </List>
          </Box>
        )
    );
  }
}

export default connector(QuestionDetails);

QuestionDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  questionDetails: PropTypes.object,
  isQuestionDetailsLoading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.object,
};
QuestionDetails.defaultProps = {
  questionDetails: {},
  isQuestionDetailsLoading: false,
  match: {},
  actions: {},
};
