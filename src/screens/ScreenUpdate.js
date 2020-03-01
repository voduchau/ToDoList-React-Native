import React, { useState } from 'react';
import {View,TextInput,StyleSheet,Button} from 'react-native';

const ScreenUpdate = ({route,navigation: {goBack}}) => {
    const {item,updateItem} = route.params;
    const [textUpdate,setText] = useState(item.name);
    const updateItem1 = () => {
        updateItem(item.id,textUpdate);
        goBack();
    }
    // const {params} = props.navigation.state;
    return (
        <View>
            <TextInput
                scrollEnabled
                style={styles.inputStyle} 
                value={textUpdate} 
                onChangeText= {(text)=>setText(text)}
            />
            <View style={styles.ViewBtn}>
                <Button
                    title="UPDATE"
                    color="blue"
                    onPress={() => updateItem1()}
                />
           </View>
        
        </View>
    )
}

const styles=StyleSheet.create({
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
      ViewBtn: {
        width: '20%',
        marginBottom: 10,
        marginHorizontal: '40%',
      },
});

export default ScreenUpdate;