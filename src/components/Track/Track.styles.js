import styled from 'styled-components';

import breakpoint from 'styled-components-breakpoint';
import colors from '../../theme/colors';

const TrackStyled = styled.li`
  display: flex;
  justify-content: flex;
  width: 100%;
  font-size: 16px;
  padding-bottom: 25px;
  color: ${colors.primary[300]};

  > span {
    font-family: 'Roboto', sans-serif;
  }

  > span:nth-child(1) {
    width: 50px;
    transition: width 0.3s ease-out;

    &::after {
      content: '.';
      margin-right: 15px;

      ${breakpoint('tablet')`
        margin-right: 30px;
      `}
    }
  }
  > span:nth-child(2) {
    flex-grow: 1;
    color: ${colors.primary[700]};
  }}
  }

  &:hover {
    cursor: pointer;

    > span:nth-child(1) {
      width: 65px;
    }
  }
`;

export default TrackStyled;
