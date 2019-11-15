import styled, { createGlobalStyle } from 'styled-components';
import colors from './theme/colors';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  ul, ol {
    list-style: none;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: ${colors.primary[100]};
    color: ${colors.primary[700]};

    &::after {
      content : "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      // background: transparent url('https://raw.githubusercontent.com/rodyrafa/challenge/master/imgs/home_1.jpg') no-repeat top center;
      // background: transparent url('https://raw.githubusercontent.com/rodyrafa/challenge/master/imgs/home_2.jpg') no-repeat top center;
      // background: transparent url('https://github.com/rodyrafa/challenge/raw/master/imgs/list.jpg') no-repeat top center;
      width: 100%;
      height: 100%;
      // opacity: 0.3;
      z-index: -1;
    }
  }
`;

export const BackgroundStyled = styled.div`
  background-color: ${colors.primary[100]};
  padding: 1%;
`;

export default GlobalStyles;
