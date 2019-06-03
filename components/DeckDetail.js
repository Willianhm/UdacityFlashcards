import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { textPrimaryColor, textSecondaryColor, borderColor } from '../utils/colors';

export default ({ item }) => (
    <View style={styles.deck}>
        <Text style={styles.deckName}>{item.title}</Text>
        <Text style={styles.deckCount}>{item.countCards} cards</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    deck: {
        height: 120,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: borderColor
    },
    deckName: {
        fontSize: 20,
        color: textPrimaryColor
    },
    deckCount: {
        fontSize: 12,
        color: textSecondaryColor
    }
});