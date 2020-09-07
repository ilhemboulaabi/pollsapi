import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import { QuestionDetails } from '../components/QuestionDetails';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    QuestionDetails: {},
    isQuestionDetailsLoading: false,
    actions: {
      QuestionDetails: {
        loadQuestionDetails: jest.fn(),
      },
    },
    match: {
      url: '/questions/1',
    },
  };

  const wrapper = shallow(
    <QuestionDetails {...props} />,
    {
      disableLifecycleMethods: true,
    },
  );

  return {
    props,
    wrapper,
  };
};

describe('QuestionDetails', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
