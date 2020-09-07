import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as QuestionsActions from '../../store/actions/questions';

const mapDispatchToProps = (dispatch) => ({
  actions: {
    questions: bindActionCreators(QuestionsActions, dispatch),
  },
});

export default connect(null, mapDispatchToProps);
