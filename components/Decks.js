import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-navigation';

import { getDecks } from '../actions/deck';


import DeckDetail from './DeckDetail';

class Deck extends Component {
    componentDidMount(){
        this.props.getDecks();
    }

    goToDeckDetail = (id) => {
        this.props.navigation.navigate(
            'DeckInfo',
            { deckId: id }
        );
    }

    _keyExtractor = (item) => item.id.toString();

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.goToDeckDetail(item.id)}>
                <DeckDetail item={item} showBorderBottom />
            </TouchableOpacity>
        )
    };

    render() {
        const { deck } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={deck}
                    renderItem={this.renderItem}
                    keyExtractor={this._keyExtractor}
                    contentContainerStyle={{ padding: 10 }}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ deck }) => {
    return {
        deck
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDecks: () => dispatch(getDecks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'stretch'
    }
});