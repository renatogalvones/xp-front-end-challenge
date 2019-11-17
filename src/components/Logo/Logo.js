import React from 'react';
import styled from 'styled-components';

import colors from '../../theme/colors';
import SpotifyLogo from '../../assets/images/spotify-logo.svg';

const LogoStyled = styled.span`
  width: 50px;
  // background: ${colors.primary[900]};
  display: inline-block;
  position: relative;

  > img {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    background: white;
    top: 50%;
    left: 50%;
    border-color: white;
    width: 40px;
    height: 40px;
    border-radius: 30px;
    z-index: -1;
    margin-top: -20px;
    margin-left: -20px;
  }
`;

const Logo = () => (
  <LogoStyled>
    <img src={SpotifyLogo} alt="Spotify Logo" />
  </LogoStyled>
);

export default Logo;
