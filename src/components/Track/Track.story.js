import React from 'react';
import { storiesOf } from '@storybook/react';

import { BackgroundStyled } from '../../App.styles';

import Track from './Track';

const stories = storiesOf('Track', module);
stories
  .add('single', () => (
    <BackgroundStyled>
      <ol>
        <Track num="1" name="Nome do album" length="3:31" />
      </ol>
    </BackgroundStyled>
  ))
  .add('listing', () => (
    <BackgroundStyled>
      <ol>
        <Track num="1" name="Nome do album" length="3:31" />
        <Track num="2" name="Nome do album" length="1:10" />
        <Track num="3" name="Nome do album" length="5:21" />
      </ol>
    </BackgroundStyled>
  ));
