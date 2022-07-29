import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'native-base';

const Spacer = ({ size }) => <Box style={{ flex: 1, height: size }} />;

Spacer.propTypes = {
  size: PropTypes.number,
};

Spacer.defaultProps = {
  size: 20,
};

export default Spacer;
