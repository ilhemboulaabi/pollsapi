import keyMirror from 'keymirror';

const QUESTION_DETAILS_ACTIONS = keyMirror({
  INIT_QUESTION_DETAILS: null,
  INIT_QUESTION_DETAILS_SUCCESS: null,
  INIT_QUESTION_DETAILS_FAILED: null,
});

export default {
  ...QUESTION_DETAILS_ACTIONS,
};
