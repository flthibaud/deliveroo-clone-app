import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, Image, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/outline';
import Currency from 'react-currency-formatter';

import { selectRestaurant } from '../store/reducers/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../store/reducers/basketSlice';
import { getImageUrl } from '../../sanity';

function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsBasket, setGroupedItemsBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsBasket(groupedItems);
  }, [items]);

  console.log('groupedItemsBasket', groupedItemsBasket);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Panier</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon width={50} height={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={require('../images/user-picture.png')}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <Text className="flex-1">Deliver in 50 - 75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsBasket).map(([key, item]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 bg-white px-5"
            >
              <Text className="text-[#00CCBB]">
                {item.length}
                {' '}
                x
              </Text>
              <Image
                source={{ uri: getImageUrl(item[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{item[0]?.name}</Text>

              <Text className="text-gray-600">
                <Currency quantity={item[0]?.price} currency="EUR" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Supprimer
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Sous-total</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="EUR" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Frais de livraison</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="EUR" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Total de la commande</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="EUR" />
            </Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4">
            <Text className="text-center text-white text-lg font-bold">Valider la commande</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BasketScreen;
