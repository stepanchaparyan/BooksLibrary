import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BookCard } from "./BookCard.js";

const props = {
  book: {name: 'Book1', genre: 'Drama', id: '123'},
  onClick: () => {},
}

function setupShallow() {
  const wrapper = shallow(<BookCard {...props} />);
  return { wrapper };
}

describe('BookCard component test with Enzyme', () => {
  it('renders without crashing', () => {
    const { wrapper } = setupShallow();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});


