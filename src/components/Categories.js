import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

import sanityClient, { getImageUrl } from '../../sanity';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "category"]
    `).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}

      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={getImageUrl(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}

export default Categories;
