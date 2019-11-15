import styled from 'styled-components';

import colors from '../../theme/colors';

export const MarginLess = styled.h1`
  color: ${colors.primary[700]};
  display: inline-block;
  width: 100%;
  font: normal 24px 'Roboto', sans-serif;
  padding: 0;
`;

export default styled(MarginLess)`
  margin: 60px 0 45px 5px;
`;
