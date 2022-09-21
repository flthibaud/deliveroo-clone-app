import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Text, Heading, Button, Box,
} from 'native-base';
import Spacer from './Spacer';

function Error({ title, content, tryAgain }) {
  return (
    <Container style={{ flex: 1 }}>
      <Box style={{ alignSelf: 'center' }}>
        <Spacer size={20} />
        <Heading size="md" style={{ textAlign: 'center' }}>{title}</Heading>
        <Text style={{ textAlign: 'center', marginBottom: 20 }}>{content}</Text>
        {tryAgain && (
        <Button block onPress={tryAgain}>
          <Text>Try Again</Text>
        </Button>
        )}
        <Spacer size={20} />
      </Box>
    </Container>
  );
}

Error.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  tryAgain: PropTypes.func,
};

Error.defaultProps = {
  title: 'Uh oh',
  content: 'An unexpected error came up',
  tryAgain: null,
};

export default Error;
