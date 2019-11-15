import React from 'react';
import { node, bool } from 'prop-types';

import HeadingStyled, { MarginLess } from './Heading.styles';

const propTypes = {
  children: node.isRequired,
  marginLess: bool,
};

const defaultProps = {
  marginLess: false,
};

const Heading = ({ children, marginLess }) => {
  if (marginLess) return <MarginLess>{children}</MarginLess>;
  return <HeadingStyled>{children}</HeadingStyled>;
};

Heading.MarginLess = (props) => <Heading {...props} marginLess />;

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
