import React from 'react';
import { mount } from 'enzyme';

import Card from './Card';

const cardProps = {
  album: 'Nome do album',
  artist: 'Nome do artista',
  imgUrl:
    'https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2013/05/Run-Cover.jpg',
};

describe('<Card />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(<Card {...cardProps} />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('with bigger props', () => {
    beforeAll(() => {
      wrapper = mount(<Card.Bigger {...cardProps} />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
