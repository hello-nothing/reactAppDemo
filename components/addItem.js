import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="请输入"
        onChangeText={text => setText(text)}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={() => {addItem(text),setText('')}}>
        <Text style={styles.buttonText}>+添加</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 10,
    fontSize: 26,
  },
  button: {
    backgroundColor: '#e34d59',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default AddItem;
