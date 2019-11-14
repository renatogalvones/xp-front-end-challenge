import styled from 'styled-components';

import colors from '../../theme/colors';

const TrackStyled = styled.li`
  display: flex;
  justify-content: flex;
  width: 100%;
  font-size: 16px;
  margin-bottom: 25px;
  color: ${colors.primary[300]};

  > span {
    font-family: 'Roboto', sans-serif;
  }

  > span:nth-child(1) {
    &::after {
      content: '.';
      margin-right: 30px;
    }
  }
  > span:nth-child(2) {
    flex-grow: 1;
    color: ${colors.primary[700]};
  }
`;

export default TrackStyled;
