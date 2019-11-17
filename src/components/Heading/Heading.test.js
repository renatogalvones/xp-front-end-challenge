import React from 'react';
import { mount } from 'enzyme';

import Heading from './Heading';

describe('<Heading />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<Heading>Test heading</Heading>);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
