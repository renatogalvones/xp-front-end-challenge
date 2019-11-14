import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import colors from '../../theme/colors';

import Heading from './Heading';

const BackgroundStyled = styled.div`
  background-color: ${colors.primary[900]};
  padding: 5%;
`;

const stories = storiesOf('Heading', module);
stories.add('default', () => (
  <BackgroundStyled>
    <Heading>Álbuns recentemente buscados</Heading>
  </BackgroundStyled>
));
