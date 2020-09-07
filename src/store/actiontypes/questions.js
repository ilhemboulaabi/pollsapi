import keyMirror from 'keymirror';

const QUESTIONS_ACTIONS = keyMirror({
  INIT_QUESTIONS: null,
  INIT_QUESTIONS_SUCCESS: null,
  INIT_QUESTIONS_FAILED: null,
  SEARCH_QUESTION: null,
  SORT_QUESTIONS: null,
  ADD_QUESTION: null,
});

export default {
  ...QUESTIONS_ACTIONS,
};
