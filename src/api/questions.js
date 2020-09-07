const API_URL = process.env.REACT_APP_API_URL;

export default function fetchQuestions(currentPage) {
  return fetch(`${API_URL}/questions?page=${currentPage}`).then((res) => res.json());
}

export function saveQuestion(question, answers) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        question,
        choices: answers,
      },
    ),
  };
  return fetch(`${API_URL}/questions?`, requestOptions).then((res) => res.json());
}
