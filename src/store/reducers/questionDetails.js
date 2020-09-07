import ActionTypes from '../actiontypes/questionDetails';

const initialState = {
  questionDetails: {},
  isQuestionDetailsLoading: false,
};

const QuestionDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_QUESTION_DETAILS:
      return {
        ...state,
        isQuestionDetailsLoading: true,
      };

    case ActionTypes.INIT_QUESTION_DETAILS_SUCCESS:
      return {
        ...state,
        questionDetails: { ...action.questionDetails },
        isQuestionDetailsLoading: false,
      };

    case ActionTypes.INIT_QUESTION_DETAILS_FAILED:
      return {
        ...state,
        isQuestionDetailsLoading: false,
      };

    default:
      return state;
  }
};
export default QuestionDetailsReducer;
