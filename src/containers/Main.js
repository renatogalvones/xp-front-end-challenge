import React from 'react';
import styled from 'styled-components';

import Search from '../components/Search';
import SpotifyLogo from '../assets/images/spotify-logo.svg';

// import Card from '../components/Card';
import Heading from '../components/Heading';

// import Track from '../components/Track';

const MainStyled = styled.section`
  max-width: 1130px;
  margin: 75px auto 0;
`;

const Logo = styled.img`
  width: 50px;
  position: absolute;
  top: 5%;
  left: 3%;
`;

const Main = () => (
  <>
    <Logo src={SpotifyLogo} alt="Spotify Logo" />
    <MainStyled>
      <Search />
      <Heading>Álbuns buscados recentemente</Heading>
    </MainStyled>
  </>
);

export default Main;
