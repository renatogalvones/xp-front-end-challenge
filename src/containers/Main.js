import React from 'react';
import styled from 'styled-components';

import Search from '../components/Search';
import SpotifyLogo from '../assets/spotify-logo.svg';

const MainStyled = styled.section`
  max-width: 1130px;
  margin: 75px auto 0;
`;

const Logo = styled.img`
  width: 50px;
  position: absolute;
  top: 5%;
  left: 3%;
  background: yellow;
`;

const Main = () => (
  <>
    <Logo src={SpotifyLogo} alt="Spotify Logo" />
    <MainStyled>
      <Search />
    </MainStyled>
  </>
);

export default Main;
