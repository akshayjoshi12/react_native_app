import React from 'react';

import { Button, StyleSheet, TouchableHighlight } from 'react-native';
import ButtonStyles from '../../constants/button-styles';


const AddCodeButton = (props) => {

    const AddButtonHandler = () => {
        props.onButtonPress();
    }

    return (
        <TouchableHighlight activeOpacity="0.1" style={ButtonStyles.btn}>
            <Button title="Add" onPress={AddButtonHandler} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 10,
        width: 100,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
    }
})

export default AddCodeButton;