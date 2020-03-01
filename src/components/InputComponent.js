import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  CheckBox,
} from 'react-native';
import TodoItem from './TodoItem';
import {TouchableOpacity} from 'react-native-gesture-handler';

const InputComponent = ({navigation,title}) => {
  const [todos, setTodo] = useState([]);
  const [values, setValue] = useState('');
  const [err, setErr] = useState('');

  const addtodo = () => {
    if (values == '') {
      setErr('please enter something');
    } else {
      setTodo([...todos, {name: values, id: String(Date.now()),status:false}]);
      setValue('');
      setErr('');
    }
  };
  const updateItem = (id,newValue) =>{
    setTodo(todos.map((item => {
      if (item.id == id){
        item.name=newValue;
        item.status=false;
      }
      return item;
    })));
  }
  const setStatus =(id)=>{
    setTodo(todos.map((item => {
      if (item.id == id){
        item.status=!item.status;
      }
      return item;
    })));
  }
  console.log(todos,'this is todosssssssssss');
  const DeleteItem = id => {
    setTodo(
      todos.filter(item => {
        return item.id != id;
      }),
    );
  };
  // console.log(todos,'todooooo');

  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        value={values}
        onChangeText={value => {
          setValue(value);
        }}
        placeholder={'Add some you want to do'}
      />
      <Text>{err}</Text>
      <View style={styles.ViewBtn}>
        <Button
          onPress={() => {
            addtodo();
          }}
          style={styles.ButtonStyle}
          title="Add"
        />
      </View>
      <FlatList
        data={todos}
        keyExtractor={todo => todo.id}
        renderItem={({item}) => {
          return <TodoItem navigation={navigation} updateItem={updateItem} nameItem={item} setStatus={setStatus} deleteItem={DeleteItem} />;
        }}
      />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewBtn: {
    width: '20%',
    marginBottom: 10,
    marginHorizontal: '40%',
  },
  inputStyle: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    fontSize: 22,
    marginTop: '5%',
    marginHorizontal: '3%',
    paddingHorizontal: 3,
    borderRadius: 8,
    marginBottom: 7,
  },
  ButtonStyle: {
    margin: 10,
  },
});

export default InputComponent;
