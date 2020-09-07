import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import Questions from '../components/Questions';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    questions: [],
    isQuestionsLoading: false,
    actions: {
      questions: {
        loadQuestions: jest.fn(),
        searchQuestion: jest.fn(),
      },
    },
  };

  const wrapper = shallow(
    <Questions {...props} />,
    {
      disableLifecycleMethods: true,
    },
  );

  return {
    props,
    wrapper,
  };
};

describe('Questions', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
