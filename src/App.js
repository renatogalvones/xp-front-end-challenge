import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Main from './containers/Main';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background: transparent url('https://raw.githubusercontent.com/rodyrafa/challenge/master/imgs/home_1.jpg') no-repeat top center;
  }
`;

// import Routes from './Routes';

const App = () => (
  <div>
    <GlobalStyles />
    <Route path="/" component={Main} />
    {/* <Route path="/albums/:artist" component={Albums} /> */}
  </div>
);

export default App;
