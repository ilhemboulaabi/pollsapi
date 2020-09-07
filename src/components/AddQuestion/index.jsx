import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Typography,
  Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import connector from './connector';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});

export class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answers: '',
      error: false,
    };
  }

  handleQuestionChange = (event) => {
    this.setState({
      question: event.target.value,
    });
  }

  handleAnswerChange = (event) => {
    this.setState({
      answers: event.target.value,
    });
  }

  handleSubmit = () => {
    const { question, answers } = this.state;
    const answersArray = answers.split('\n');
    const { history, actions } = this.props;
    actions.questions.addQuestion(question, answersArray).then(() => {
      this.setState({
        question: '',
        answers: '',
      });
      history.goBack();
    }, () => {
      this.setState({
        error: true,
      });
    });
  };

  render() {
    const { classes } = this.props;
    const { error } = this.state;

    return (
      <>
        {error && <Alert severity="warning">Check your data out! Check ToolTip!</Alert>}
        <form className={classes.root} noValidate autoComplete="off">
          <Typography component="h5" variant="h5">
            Add a question
          </Typography>
          <TextField
            required
            id="standard-basic"
            label="Question!"
            onChange={this.handleQuestionChange}
          />
          <Tooltip title="Type minimum two answers, Type 'Enter' after each answer">
            <TextField
              required
              id="outlined-multiline-static"
              label="Answers!"
              multiline
              rows={4}
              variant="outlined"
              onChange={this.handleAnswerChange}
            />
          </Tooltip>
          <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
        </form>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(connector(AddQuestion));

AddQuestion.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object,
};
AddQuestion.defaultProps = {
  actions: {},
  classes: {},
  history: {},
};
