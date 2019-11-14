/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

import colors from '../../theme/colors';

const sizes = {
  default: 170,
  bigger: 300,
};

export const CardStyled = styled.figure`
  max-width: ${(props) => (props.bigger ? sizes.bigger : sizes.default)}px;

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
      color: ${colors.primary[700]};
    }
  }
`;

export const ImageStyled = styled.div`
  background-color: ${colors.primary[700]};
  display: inline-block;
  height: ${(props) => (props.bigger ? sizes.bigger : sizes.default)}px;
  width: ${(props) => (props.bigger ? sizes.bigger : sizes.default)}px;

  > img {
    width: 100%;
  }
`;
