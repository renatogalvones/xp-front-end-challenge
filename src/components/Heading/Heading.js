import React from 'react';
import { node } from 'prop-types';

import HeadingStyled from './Heading.styles';

const propTypes = {
  children: node.isRequired,
};

const Heading = ({ children }) => <HeadingStyled>{children}</HeadingStyled>;

Heading.propTypes = propTypes;

export default Heading;
