import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import DeckDetail from './DeckDetail';
import Button from './Button';

class DeckInfo extends Component {
     navigate = (route) => {
        this.props.navigation.navigate(
            route,
            { deckId: this.props.deck.id }
        );
    }

    render() {
        const { deck } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <DeckDetail item={deck} customStyle={deckDetailStyle} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        title="Add Card"
                        onPress={() => { this.navigate('AddCard') }}
                        customStyle={{ marginBottom: 10 }}
                        outline
                    />
                    <Button
                        title="Start Quiz"
                        onPress={() => { this.navigate('Quiz') }}
                        block
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ deck }, { navigation }) => {
    const { deckId } = navigation.state.params;
    return {
        deck: deck.length ? { ...deck.filter(d => d.id === deckId)[0] } : {}
    }
}

export default connect(mapStateToProps)(DeckInfo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
});


const deckDetailStyle = StyleSheet.create({
    container: {
        borderBottomWidth: 0
    },
    title: {
        fontSize: 30
    },
    subtitle: {
        fontSize: 20
    }
});