import React from 'react';

import { View, StyleSheet, TouchableOpacity, ProgressViewIOSComponent } from 'react-native';

const CouponItem = (props) => {
    return (
        <TouchableOpacity 
        onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItemCss}>{props.couponId}</View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    listItemCss: {
        width: 300,
        borderStyle: 'solid',
        backgroundColor:'#EDB222',
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
  });

export default CouponItem;