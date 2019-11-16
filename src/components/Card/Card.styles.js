/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

import colors from '../../theme/colors';

export const CardStyled = styled.figure`
  max-width: 100%;
  margin: 0;

  > figcaption {
    padding: 0 ${(props) => (props.bigger ? 45 : 5)}px;

    > span {
      display: inline-block;
      width: 100%;
      color: ${colors.primary[900]};
      font-family: 'Roboto', sans-serif;
      text-align: center;
      margin-top: 7px;
      font-size: 14px;
      line-height: 16px;
    }

    ${(props) => props.bigger
      && `
       > span:nth-child(1) {
        margin: 20px 0 10pxs;
        font-size: 18px;
        line-height: 18px;
       }
    `}

    > span:nth-child(2) {
      color: ${colors.primary[300]};
    }
  }
`;

export const ImageStyled = styled.div`
  display: inline-block;
  width: 100%;

  > img {
    width: 100%;
  }
`;
