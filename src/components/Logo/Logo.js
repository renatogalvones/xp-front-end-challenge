import React from 'react';
import styled from 'styled-components';

import colors from '../../theme/colors';
import SpotifyLogo from '../../assets/images/spotify-logo.svg';

const LogoStyled = styled.span`
  width: 50px;
  background: ${colors.primary[900]};
  display: inline-block;

  > img {
    width: 100%;
  }
`;

const Logo = () => (
  <LogoStyled>
    <img src={SpotifyLogo} alt="Spotify Logo" />
  </LogoStyled>
);

export default Logo;
