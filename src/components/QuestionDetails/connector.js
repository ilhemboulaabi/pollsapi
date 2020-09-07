import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as QuestionDetailsActions from '../../store/actions/questionDetails';

const mapStateToProps = (state) => ({
  questionDetails: state.questionDetails.questionDetails,
  isQuestionDetailsLoading: state.questionDetails.isQuestionDetailsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    questionDetails: bindActionCreators(QuestionDetailsActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
