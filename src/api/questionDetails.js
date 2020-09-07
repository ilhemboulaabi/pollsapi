const API_URL = process.env.REACT_APP_API_URL;

export default function fetchQuestionDetails(questionUrl) {
  return fetch(`${API_URL}${questionUrl}`).then((res) => res.json());
}
