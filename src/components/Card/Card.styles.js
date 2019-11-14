/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

const sizes = {
  default: 170,
  bigger: 300,
};

export const CardStyled = styled.figure`
  max-width: ${(props) => (props.bigger ? sizes.bigger : sizes.default)}px;
`;

export const ImageStyled = styled.div`
  background-color: #fafafa;
  display: inline-block;
  height: ${(props) => (props.bigger ? sizes.bigger : sizes.default)}px;
  width: ${(props) => (props.bigger ? sizes.bigger : sizes.default)}px;

  > img {
    width: 100%;
  }
`;

export const AlbumStyled = styled.figcaption`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  margin: 7px 0;
  text-align: center;
`;

export const ArtistStyled = styled(AlbumStyled)`
  color: #999;
`;
