import ActionTypes from '../actiontypes/questions';

const initialState = {
  questions: [],
  initQuestions: [],
  isQuestionsLoading: true,
};

const QuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_QUESTIONS:
      return {
        ...state,
        isQuestionsLoading: true,
      };

    case ActionTypes.INIT_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [...action.questions],
        initQuestions: [...action.questions],
        isQuestionsLoading: false,
      };

    case ActionTypes.INIT_QUESTIONS_FAILED:
      return {
        ...state,
        isQuestionsLoading: false,
      };

    case ActionTypes.SEARCH_QUESTION: {
      const { searchParam, searchId } = action;
      const searchedQuestion = state.initQuestions.filter((question) => (
        question[searchId].toLowerCase().search(searchParam.toLowerCase()) !== -1
      ));
      return {
        ...state,
        questions: searchedQuestion,
      };
    }

    case ActionTypes.SORT_QUESTIONS: {
      const { sortParam } = action;
      const sortedQuestions = state.questions.slice().sort((a, b) => {
        if (a[sortParam].toLowerCase() > b[sortParam].toLowerCase()) {
          return -1;
        }
        if (a[sortParam] < b[sortParam]) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        questions: sortedQuestions,
      };
    }

    default:
      return state;
  }
};
export default QuestionsReducer;
