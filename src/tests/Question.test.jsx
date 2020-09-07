import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import Question from '../components/Question';
import questionData from './mockData/data';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    question: questionData,
    loading: false,
  };

  const wrapper = shallow(<Question {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Question', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
