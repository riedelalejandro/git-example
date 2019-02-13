import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ h: Tag = 'h1', children }) => <Tag>{children}</Tag>;

Title.propTypes = {
  h: PropTypes.string,
  children: PropTypes.element,
};

export default Title;
