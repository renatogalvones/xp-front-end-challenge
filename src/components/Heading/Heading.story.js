import React from 'react';
import { storiesOf } from '@storybook/react';

import { BackgroundStyled } from '../../App.styles';

import Heading from './Heading';

const stories = storiesOf('Heading', module);
stories.add('default', () => (
  <BackgroundStyled>
    <Heading>Álbuns recentemente buscados</Heading>
  </BackgroundStyled>
));
