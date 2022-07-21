import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#999999',
    padding: 16,
  },
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});
export default Header;
