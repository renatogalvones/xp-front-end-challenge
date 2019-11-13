import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import colors from '../../theme/colors';

import Card from './Card';

const BackgroundStyled = styled.div`
  background-color: ${colors.primary[900]};
  padding: 5%;
`;

const stories = storiesOf('Card', module);
stories
  .add('default', () => (
    <BackgroundStyled>
      <Card album="Nome do album" artist="Nome do artista" />
    </BackgroundStyled>
  ))
  .add('with image and alt', () => (
    <BackgroundStyled>
      <Card
        album="Nome do album grande de duas linhas"
        artist="Nome do artista grande de duas linhas"
        imgUrl="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2013/05/Run-Cover.jpg"
      />
    </BackgroundStyled>
  ));
