import styled from 'styled-components';

export const CardStyled = styled.figure`
  max-width: 170px;
`;

export const ImageStyled = styled.div`
  background-color: #fafafa;
  display: inline-block;
  height: 170px;
  width: 170px;

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
