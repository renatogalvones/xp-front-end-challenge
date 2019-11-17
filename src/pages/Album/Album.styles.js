import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const MainWrapper = styled.section`
  max-width: 1130px;
  padding: 10px;

  > a {
    padding-top: 10px;
    display: block;
    width: 100%;
  }

  > .content {
    margin-top: 20px;

    > .trackList {
      margin-top: 20px;
    }

    ${breakpoint('tablet')`
      display: flex;
      justify-content: space-between;

      > figure {
        max-width: 300px;
      }

      > .trackList {
        flex: 1 0;
        margin-left: 60px;
        margin-top: 0;
      }
    `}
  }
`;

export default MainWrapper;
