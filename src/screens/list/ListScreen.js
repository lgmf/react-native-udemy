import React from 'react';
import { FlatList, Text } from 'react-native';

import people from '../../../mocks/People';
import styles from './ListScreenStyles';

const Person = ({ item }) => (
  <Text style={styles.listItem}>
    {`${item.first_name} ${item.last_name}`}
  </Text>
);

const ListScreen = () => {
  return (
    <FlatList
      style={styles.list}
      data={people}
      keyExtractor={person => person.id}      
      renderItem={Person}></FlatList>
  );
}

export default ListScreen;
