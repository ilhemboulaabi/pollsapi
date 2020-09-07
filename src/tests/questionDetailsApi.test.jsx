import fetchQuestionDetails from '../api/questionDetails';
import QuestionDetailsData from './mockData/data';

global.fetch = require('jest-fetch-mock');

describe('testing QuestionDetails api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls yelp', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: QuestionDetailsData }));

    fetchQuestionDetails().then((res) => {
      expect(res.data.published_at).toEqual('2014-11-11T08:40:51.620Z');
    });

    expect(fetch.mock.calls.length).toEqual(1);
  });
});
