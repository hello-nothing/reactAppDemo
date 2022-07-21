import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => deleteItem(item.id)}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginTop: 30,
  },
  listItemView: {
    fontSize: 24,
  },
  listItemText: {
    fontSize: 18,
    color: '#333',
  },
});
export default ListItem;
