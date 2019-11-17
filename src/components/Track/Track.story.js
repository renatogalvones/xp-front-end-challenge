import React from 'react';
import { storiesOf } from '@storybook/react';

import { BackgroundStyled } from '../../App.styles';

import Track from './Track';

const stories = storiesOf('Track', module);
stories
  .add('single', () => (
    <BackgroundStyled>
      <ol>
        <Track id="id" num={1} name="Nome do album" duration="3:31" />
      </ol>
    </BackgroundStyled>
  ))
  .add('listing', () => (
    <BackgroundStyled>
      <ol>
        <Track id="id" num={1} name="Nome do album" duration="3:31" />
        <Track id="id" num={2} name="Nome do album" duration="1:10" />
        <Track id="id" num={3} name="Nome do album" duration="5:21" />
      </ol>
    </BackgroundStyled>
  ));
