import React from 'react';
import { mount } from 'enzyme';

import Search from './Search';

describe('<Search />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<Search handleSearch={() => {}} />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
