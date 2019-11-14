import React from 'react';
import { storiesOf } from '@storybook/react';

import { BackgroundStyled } from '../../App.styles';

import Search from './Search';

const stories = storiesOf('Search', module);
stories.add('default', () => (
  <BackgroundStyled>
    <Search />
  </BackgroundStyled>
));
