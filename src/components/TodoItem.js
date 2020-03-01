import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, CheckBox, ScrollView} from 'react-native';

const TodoItem = ({nameItem,todos,updateItem, deleteItem, setStatus,navigation}) => {
  const changeCheck = () => {
    setStatus(nameItem.id);
  }
  const text= nameItem.status? <Text style={styles.Item2}>{nameItem.name}</Text>:<Text style={styles.Item}>{nameItem.name}</Text>
  return (
    <View style={styles.ViewStyle}>
      
      <CheckBox 
      value={nameItem.status}
      onValueChange = {() =>
        changeCheck()
      } />
      <ScrollView style={styles.viewScroll}>
        <View>
          {text}
        </View>
      </ScrollView>
      <View style={styles.Viewbtn}>
        <Button
          title="EDIT"
          color="blue"
          onPress={() =>navigation.navigate('ScreenUpdate',{item: nameItem,updateItem:updateItem})}
        />
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
  viewScroll:{
    flex:1,
    overflow: 'scroll',
  },
  ViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    borderBottomWidth:2,
    marginBottom:15,
  },
  Item: {
    fontSize: 25,  },
  Viewbtn:{
    alignItems:'flex-start',
    flexDirection:'row',

  },
  Item2:{
    fontSize: 25,
    textDecorationLine: "line-through",
  }
});

export default TodoItem;
