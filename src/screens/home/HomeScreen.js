import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from './HomeScreenStyles';

const HomeScreen = ({ navigation: { navigate } }) => {

  goTo = (routeName) => () => {
    navigate(routeName);
  }

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={goTo('List')}
        title="Go to List"></Button>
    </View>
  );
};

export default HomeScreen;
