import { combineReducers } from 'redux';
import QuestionsReducer from './questions';
import QuestionDetailsReducer from './questionDetails';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  questionDetails: QuestionDetailsReducer,
});

export default rootReducer;
