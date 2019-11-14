import React from 'react';
import { Route } from 'react-router-dom';

import GlobalStyles from './App.styles';
import Main from './containers/Main';

// import Routes from './Routes';

const App = () => (
  <div>
    <GlobalStyles />
    <Route path="/" component={Main} />
    {/* <Route path="/albums/:artist" component={Albums} /> */}
  </div>
);

export default App;
