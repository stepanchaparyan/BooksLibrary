import React from "react";
import renderer from "react-test-renderer";
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { PageNotFound } from "./PageNotFound.js";

function setupShallow() {
  const wrapper = shallow(<PageNotFound />);
  return { wrapper };
}

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const { wrapper } = setupShallow();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

