import React from 'react';
import { View, Button } from 'react-native';

import ImageDetail from '../../components/ImageDetail';

import styles from './HomeScreenStyles';

const HomeScreen = ({ navigation: { navigate } }) => {

  const images = [1,2,3];

  goTo = (routeName) => () => {
    navigate(routeName);
  }

  return (
    <View>
      {images.map(img => <ImageDetail/>)}
      <Button
        onPress={goTo('List')}
        title="Go to List"></Button>
    </View>
  );
};

export default HomeScreen;
