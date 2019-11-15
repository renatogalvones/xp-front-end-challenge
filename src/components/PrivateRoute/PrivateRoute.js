import React from 'react';
import { node, bool } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const propTypes = {
  children: node.isRequired,
  isAuthenticated: bool.isRequired,
};

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => (
  <Route {...rest} render={() => (isAuthenticated ? children : <Redirect to="/" />)} />
);

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
