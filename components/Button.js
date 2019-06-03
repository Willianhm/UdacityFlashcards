import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { white, purple, primaryColor } from '../utils/colors';

export default function Button({ title, onPress, block }) {
    return (
        <TouchableOpacity
            style={[styles.button, block ? {flex: 1} : null ]}
            onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: white,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: primaryColor
    },
    text: {
        color: primaryColor
    }
});
