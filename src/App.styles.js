import { createGlobalStyle } from 'styled-components';
import colors from './theme/colors';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background-color: ${colors.primary[900]};


    &::after {
      content : "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: transparent url('https://raw.githubusercontent.com/rodyrafa/challenge/master/imgs/home_1.jpg') no-repeat top center;
      // background: transparent/ url('https://raw.githubusercontent.com/rodyrafa/challenge/master/imgs/home_2.jpg') no-repeat top center;
      // background: transparent url('https://github.com/rodyrafa/challenge/raw/master/imgs/list.jpg') no-repeat top center;
      width: 100%;
      height: 100%;
      opacity : 0.3;
      z-index: -1;
    }
  }
`;

export default GlobalStyles;
