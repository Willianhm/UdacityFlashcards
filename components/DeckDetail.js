import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { textPrimaryColor, textSecondaryColor, borderColor } from '../utils/colors';

export default ({ item, customStyle }) => {
    if(customStyle){
        styles.container = { ...styles.container, ...customStyle.container };
        styles.title = { ...styles.title, ...customStyle.title };
        styles.subtitle = { ...styles.subtitle, ...customStyle.subtitle };
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.cards.length} cards</Text>
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: borderColor,
        borderBottomWidth: 1
    },
    title: {
        fontSize: 20,
        color: textPrimaryColor,
        marginBottom: 2
    },
    subtitle: {
        fontSize: 12,
        color: textSecondaryColor
    }
});