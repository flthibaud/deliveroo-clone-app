import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

import { selectBasketItems, selectBasketTotal } from '../store/reducers/featuredRow';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          Voir le panier
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="EUR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
