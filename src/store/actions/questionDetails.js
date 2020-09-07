import ActionTypes from '../actiontypes/questionDetails';
import fetchQuestionDetails from '../../api/questionDetails';

const initQuestionDetailsSuccess = (questionDetails) => ({
  type: ActionTypes.INIT_QUESTION_DETAILS_SUCCESS,
  questionDetails,
});

const initQuestionDetailsFailure = (error) => ({
  type: ActionTypes.INIT_QUESTION_DETAILS_FAILED,
  error,
});

const initQuestionDetails = () => ({
  type: ActionTypes.INIT_QUESTION_DETAILS,
});

export function loadQuestionDetails(questionUrl) {
  return (dispatch) => {
    dispatch(initQuestionDetails());

    return fetchQuestionDetails(questionUrl).then(
      (response) => dispatch(initQuestionDetailsSuccess(response)),
      (error) => dispatch(initQuestionDetailsFailure(error)),
    );
  };
}
