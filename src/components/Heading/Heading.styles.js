import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import colors from '../../theme/colors';

const HeadingStyled = styled.h1`
  color: ${colors.primary[700]};
  display: inline-block;
  width: 100%;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 18px;

  ${breakpoint('desktop')`
    font-size: 24px;
  `}
`;

export default HeadingStyled;
