import React from 'react';
import { bool } from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import GlobalStyles from './App.styles';

import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';

const SearchPage = () => <div>SEARCH PAGE</div>;

const propTypes = {
  isAuthenticated: bool.isRequired,
};

const App = (props) => {
  const { isAuthenticated } = props;
  const homeContent = isAuthenticated ? <SearchPage /> : <Login />;

  return (
    <div>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          {homeContent}
        </Route>
        <PrivateRoute path="/search" isAuthenticated={isAuthenticated}>
          <SearchPage />
        </PrivateRoute>
        {/* <Route path="/albums/:artist" component={Albums} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

App.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(App);
