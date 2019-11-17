import React, { Component } from 'react';
import {
  number, string, func, bool,
} from 'prop-types';

import TrackStyled from './Track.styles';

const propTypes = {
  id: string.isRequired,
  num: number.isRequired,
  name: string.isRequired,
  duration: string.isRequired,
  handleClick: func,
  isPlaying: bool,
};

const defaultProps = {
  handleClick: () => {},
};

class Track extends Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    const { handleClick, id } = this.props;
    handleClick(id);
  }

  render() {
    const { num, name, duration } = this.props;

    return (
      <TrackStyled onClick={this.clickHandler}>
        <span>{num}</span>
        <span>{name}</span>
        <span>{duration}</span>
      </TrackStyled>
    );
  }
}

Track.propTypes = propTypes;
Track.defaultProps = defaultProps;

export default Track;
