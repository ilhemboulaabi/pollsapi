import questionData from './mockData/data';
import fetchQuestionDetails from '../api/questionDetails';

global.fetch = require('jest-fetch-mock');

describe('testing questions api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls api', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: [questionData] }));

    fetchQuestionDetails().then((res) => {
      expect(res.data[0].question).toEqual('Favourite programming language?');
    });

    expect(fetch.mock.calls.length).toEqual(1);
  });
});
