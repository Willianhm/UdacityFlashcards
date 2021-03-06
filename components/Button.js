import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { white, purple, primaryColor } from '../utils/colors';

export default function Button({ title, onPress, customStyle, outline, disabled }) {
    return (
        <TouchableOpacity
            style={[styles.button, customStyle, outline ? styles.outline : null, disabled ? { opacity: 0.6 } : null ]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={{ color: outline ? primaryColor : white }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: primaryColor,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: primaryColor
    },
    outline: {
        backgroundColor: white,
    }
});
