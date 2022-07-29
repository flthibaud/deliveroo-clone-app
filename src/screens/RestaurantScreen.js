import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ArrowLeftIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';
import sanityClient, { getImageUrl } from '../../sanity';

import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
  const navigation = useNavigation();
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          className="w-full h-56 bg-gray-300 p-4"
          source={{
            uri: getImageUrl(imgUrl).url(),
          }}
        />
        <TouchableOpacity
          className="absolute top-10 left-5 p-3 bg-gray-100 rounded-full shadow"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} color="green" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> - {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <LocationMarkerIcon size={22} color="gray" opacity={0.4} />
              <Text className="text-xs text-gray-500">
                {address}
              </Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            have a food allergy ?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">
          Menu
        </Text>

        {/* Disshrows */}
        {dishes.map((dish) => (
          <DishRow
            //key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
