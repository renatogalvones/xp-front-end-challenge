import React from 'react';
import { mount } from 'enzyme';

import Track from './Track';

describe('<Track />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<Track id="id" num={1} name="Nome do album" duration="3:31" />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
