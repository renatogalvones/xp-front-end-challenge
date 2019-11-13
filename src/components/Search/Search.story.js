import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import colors from '../../theme/colors';

import Search from './Search';

const BackgroundStyled = styled.div`
  background-color: ${colors.primary[900]};
  padding: 5%;
`;

const stories = storiesOf('Search', module);
stories.add('default', () => (
  <BackgroundStyled>
    <Search />
  </BackgroundStyled>
));
