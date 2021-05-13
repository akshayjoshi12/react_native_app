import React, { useState } from 'react';

import { TextInput, StyleSheet, Text, View } from 'react-native';

import Card from '../Card';

const UserInput = (props) => {

    const [codeValue, setCodeValue] = useState('');
    const [brandName, setBrandName] = useState('');

    const changeCodeHandler = (enteredText) => {
        setCodeValue(enteredText);
        let combinedText = "";
        if(brandName)
        {
            combinedText = <View><Text>Brand: {brandName}</Text><Text>Coupon Code: {enteredText}</Text></View>;
        }
        props.onInputChange(combinedText);
    }

    const changeBrandHandler = (enteredBrand) => {
        setBrandName(enteredBrand);
        let combinedText = "";
        if(codeValue)
        {
            combinedText = <View><Text>Brand: {enteredBrand}</Text><Text>Coupon Code: {codeValue}</Text></View>;
        }
        props.onInputChange(combinedText);
    }

    return (
        <Card>
            <TextInput 
                style={styles.clsinput} 
                onChangeText={changeBrandHandler}
                placeholder='Brand'
            />
            <TextInput 
                style={styles.clsinput} 
                onChangeText={changeCodeHandler}
                placeholder='Coupon Code'
            />
        </Card>
    )
}
const styles = StyleSheet.create({
    clsinput: {
      borderWidth: 1,
      width: 200,
      height: 50,
      padding: 10,
      marginRight: 10,
      marginTop: 5,
    }
  });

export default UserInput;