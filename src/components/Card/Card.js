import React from 'react';
import { string } from 'prop-types';

import {
  CardStyled, ImageStyled, AlbumStyled, ArtistStyled,
} from './Card.styles';

const propTypes = {
  imgUrl: string,
  album: string.isRequired,
  artist: string.isRequired,
};

const defaultProps = {
  imgUrl: '',
};

const Card = ({ imgUrl, album, artist }) => {
  const alt = `${album} - ${artist}`;
  return (
    <CardStyled>
      <ImageStyled>{imgUrl && <img src={imgUrl} alt={alt} />}</ImageStyled>
      <AlbumStyled>{album}</AlbumStyled>
      <ArtistStyled>{artist}</ArtistStyled>
    </CardStyled>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
