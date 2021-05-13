import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardContainer} >{props.children}</View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 200,
        shadowColor: '#333',
        borderStyle: 'solid',
        borderColor: '#000',
        padding: 10,
        backgroundColor: '#F9C2FF',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
    }
});

export default Card;