import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Header from './components/header';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: '牛奶',
    },
    {
      id: 2,
      text: '面包',
    },
    {
      id: 3,
      text: '鸡蛋',
    },
  ]);
  return (
    <View>
      <Header title="首页" />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};
export default App;
