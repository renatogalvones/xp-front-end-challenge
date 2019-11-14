import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import colors from '../../theme/colors';

import Card from './Card';

const BackgroundStyled = styled.div`
  background-color: ${colors.primary[900]};
  padding: 5%;
`;

const cardProps = {
  album: 'Nome do album',
  artist: 'Nome do artista',
};

const imageProps = {
  album: 'Nome do album grande de duas linhas',
  artist: 'Nome do artista grande de duas linhas',
  imgUrl:
    'https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2013/05/Run-Cover.jpg',
};

const stories = storiesOf('Card', module);
stories
  .add('default', () => (
    <BackgroundStyled>
      <Card {...cardProps} />
    </BackgroundStyled>
  ))
  .add('with image', () => (
    <BackgroundStyled>
      <Card {...imageProps} />
    </BackgroundStyled>
  ))
  .add('Bigger default', () => (
    <BackgroundStyled>
      <Card.Bigger {...cardProps} />
    </BackgroundStyled>
  ))
  .add('Bigger with image', () => (
    <BackgroundStyled>
      <Card.Bigger {...imageProps} />
    </BackgroundStyled>
  ));
