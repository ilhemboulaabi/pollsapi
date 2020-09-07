import ActionTypes from '../actiontypes/questions';
import fetchQuestions, { saveQuestion } from '../../api/questions';

const initQuestionsSuccess = (questions) => ({
  type: ActionTypes.INIT_QUESTIONS_SUCCESS,
  questions,
});

const initQuestionsFailure = (error) => ({
  type: ActionTypes.INIT_QUESTIONS_FAILED,
  error,
});

const initQuestions = () => ({
  type: ActionTypes.INIT_QUESTIONS,
});

export const searchQuestion = (searchParam, searchId) => ({
  type: ActionTypes.SEARCH_QUESTION,
  searchParam,
  searchId,
});

export const sortQuestions = (sortParam) => ({
  type: ActionTypes.SORT_QUESTIONS,
  sortParam,
});

export function loadQuestions(currentPage) {
  return (dispatch) => {
    dispatch(initQuestions());

    return fetchQuestions(currentPage).then(
      (response) => dispatch(initQuestionsSuccess(response)),
      (error) => dispatch(initQuestionsFailure(error)),
    );
  };
}

export const createQuestion = (question, answers) => ({
  type: ActionTypes.ADD_QUESTION,
  question,
  answers,
});

export function addQuestion(question, answers) {
  return (dispatch) => (
    saveQuestion(question, answers).then(
      () => dispatch(createQuestion(question, answers)),
    )
  );
}
