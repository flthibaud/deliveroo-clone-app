import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default RestaurantScreen;
