import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';

function Loading() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
      <ActivityIndicator size="large" color={Colors.brandPrimary} />
    </View>
  );
}

export default Loading;
