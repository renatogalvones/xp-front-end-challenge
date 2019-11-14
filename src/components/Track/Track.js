import React from 'react';
import { number, string } from 'prop-types';

import TrackStyled from './Track.styles';

const propTypes = {
  num: number.isRequired,
  name: string.isRequired,
  length: string.isRequired,
};

const Track = ({ num, name, length }) => (
  <TrackStyled>
    <span>{num}</span>
    <span>{name}</span>
    <span>{length}</span>
  </TrackStyled>
);

Track.propTypes = propTypes;

export default Track;
