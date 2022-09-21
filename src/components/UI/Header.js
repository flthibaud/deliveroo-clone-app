import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, Heading } from 'native-base';
import Spacer from './Spacer';

function Header({ title, content }) {
  return (
    <View>
      <Spacer size={25} />
      <Heading size="xl">{title}</Heading>
      {!!content && (
      <View>
        <Spacer size={10} />
        <Text>{content}</Text>
      </View>
      )}
      <Spacer size={25} />
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Header.defaultProps = {
  title: 'Missing title',
  content: '',
};

export default Header;
