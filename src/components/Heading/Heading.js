import React from 'react';
import { node, bool } from 'prop-types';

import HeadingStyled from './Heading.styles';

const propTypes = {
  children: node.isRequired,
  marginLess: bool,
};

const defaultProps = {
  marginLess: false,
};

const Heading = ({ children }) => <HeadingStyled>{children}</HeadingStyled>;

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
