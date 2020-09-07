import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as QuestionsActions from '../../store/actions/questions';

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  isQuestionsLoading: state.questions.isQuestionsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    questions: bindActionCreators(QuestionsActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
