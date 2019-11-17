import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { BackgroundStyled } from '../../App.styles';

import Card from './Card';

const SmallWrapper = styled.div`
  width: 170px;
`;

const BiggerWrapper = styled.div`
  width: 300px;
`;

const cardProps = {
  album: 'Nome do album',
  artist: 'Nome do artista',
  imgUrl:
    'https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2013/05/Run-Cover.jpg',
};

const doubleLineProps = {
  album: 'Nome do album grande de duas linhas',
  artist: 'Nome do artista grande de duas linhas',
  imgUrl:
    'https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2013/05/Run-Cover.jpg',
};

const stories = storiesOf('Card', module);
stories
  .add('default', () => (
    <BackgroundStyled>
      <SmallWrapper>
        <Card {...cardProps} />
      </SmallWrapper>
    </BackgroundStyled>
  ))
  .add('with image', () => (
    <BackgroundStyled>
      <SmallWrapper>
        <Card {...doubleLineProps} />
      </SmallWrapper>
    </BackgroundStyled>
  ))
  .add('Bigger default', () => (
    <BackgroundStyled>
      <BiggerWrapper>
        <Card.Bigger {...cardProps} />
      </BiggerWrapper>
    </BackgroundStyled>
  ))
  .add('Bigger with image', () => (
    <BackgroundStyled>
      <BiggerWrapper>
        <Card.Bigger {...doubleLineProps} />
      </BiggerWrapper>
    </BackgroundStyled>
  ));
