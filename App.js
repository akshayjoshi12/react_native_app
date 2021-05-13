import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Button, ScrollView, SafeAreaView } from 'react-native';

import UserInput from './components/Coupon/UserInput';
import AddCodeButton from './components/Coupon/AddCodeButton';
import CouponItem from './components/Coupon/CouponItem';
import ButtonStyles from './constants/button-styles';

export default function App() {
  
  const [inputCode, setInputCode] = useState('');
  const [codeValues, setCodeValues] = useState([]);

  const InputChangeHandler = (value) => {
    setInputCode(value);
  }

  const buttonPressHandler = () => {
    if(inputCode) {
      setCodeValues(currentCodes => [...currentCodes, { id: Math.random().toString(), value:inputCode }]);
    }
  }

  const deleteRowHandler = (couponId) => {
    setCodeValues(currentCodes => {
        return currentCodes.filter(item => item.id !== couponId);
    });
  }

  const clearButtonHandler = () => {
    setCodeValues('');
  }

  return (
    <View style={styles.mainContainer}>
        <SafeAreaView style={styles.mainView}>
            <UserInput onInputChange={InputChangeHandler} />
            <AddCodeButton onButtonPress={buttonPressHandler} />
            <View style={ButtonStyles.btn}><Button title="Clear" onPress={clearButtonHandler} /></View>
        </SafeAreaView>
        <ScrollView style={{flex: 1}} >
          <FlatList
          keyExtractor={(item, index) => item.id}
          data={codeValues}
          renderItem={itemData => <CouponItem id={itemData.item.id} couponId={itemData.item.value} onDelete={deleteRowHandler} />}
          />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems: 'center',
  },
});
