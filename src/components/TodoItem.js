import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const TodoItem = ({nameItem, deleteItem}) => {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.Item}>{nameItem.name}</Text>
      <View>
        <Button
          title="DELETE"
          color="red"
          onPress={() => deleteItem(nameItem.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '15%',
    borderBottomWidth:2,
    marginBottom:15,
  },
  Item: {
    fontSize: 30,
    width: '60%',
  },
});

export default TodoItem;
