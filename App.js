import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Header from './components/header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';

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
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };
  const addItem = text => {
    if (!text) {
      return;
    }
    setItems(prevItems => {
      return [...prevItems, {text: text, id: 4}];
    });
  };
  return (
    <View>
      <Header title="首页" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};
export default App;
