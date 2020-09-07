import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import TopBar from '../TopBar';
import LeftBar from '../LeftBar';
import Questions from '../Questions';
import connector from './connector';

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 20, 2, 20),
    },
  },
  pagination: {
    marginTop: theme.spacing(2),
  },
});

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    const { actions } = this.props;
    const { currentPage } = this.state;
    actions.questions.loadQuestions(currentPage);
  }

  componentDidUpdate(prevProps, prevState) {
    const { actions } = this.props;
    const { currentPage } = this.state;
    if (prevState.currentPage !== currentPage) {
      actions.questions.loadQuestions(currentPage);
    }
  }

  handelPageChange = (event, value) => {
    const { currentPage } = this.state;
    if (currentPage !== value) {
      this.setState({
        currentPage: value,
      });
    }
  }

  render() {
    const {
      questions, isQuestionsLoading, actions, classes,
    } = this.props;
    const { currentPage } = this.state;

    return (
      <>
        <TopBar
          handelSearch={actions.questions.searchQuestion}
        />
        <Grid className={classes.root} container>
          <Grid item xs={2} sm={3} md={4}>
            <LeftBar
              handelSort={actions.questions.sortQuestions}
            />
          </Grid>
          <Grid item xs={10} sm={9} md={8}>
            <Questions
              questions={questions}
              loading={isQuestionsLoading}
            />
            <Pagination
              className={classes.pagination}
              count={2}
              page={currentPage}
              onChange={this.handelPageChange}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(connector(Main));

Main.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  questions: PropTypes.array,
  isQuestionsLoading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  actions: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object,
};
Main.defaultProps = {
  questions: [],
  isQuestionsLoading: false,
  actions: {},
  classes: {},
};
