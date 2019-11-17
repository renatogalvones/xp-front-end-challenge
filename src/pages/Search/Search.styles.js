import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const MainWrapper = styled.section`
  max-width: 1130px;
  padding: 10px;

  ${breakpoint('desktop')`
    margin: 75px auto 0;
  `}

  > .list {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    ${breakpoint('tablet')`
      margin: 0 -30px;
    `}

    > a {
      min-height: 260px;
      margin-top: 40px;
      transition: transform 0.2s linear;
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 10px;

      ${breakpoint('tablet')`
        flex: 0 0 25%;
        max-width: 25%;
        padding: 0 30px;
      `}

      ${breakpoint('desktop')`
        flex: 0 0 20%;
        max-width: 20%;
      `}

      &:hover {
        transition: transform 0.1s linear;
        transform: scale(1.1);
      }
    }
  }
`;

export default MainWrapper;
