import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import DeckDetail from './DeckDetail';

class DeckInfo extends Component{
    static navigationOptions = () => {
        return {
            // headerTransparent: true,
            headerMode: 'none',
            // headerStyle: {
            //     height: 0
            // }
        }
    }

    render(){
        const { deck } = this.props;
        return (
            <View>
                <DeckDetail item={deck}/>
            </View>
        )
    }
}

const mapStateToProps = ({ deck }, { navigation }) => {
    const { deckId } = navigation.state.params;
    return {
        deck : deck.length ? deck.filter(d => d.title === deckId)[0] : {}
    }
}

export default connect(mapStateToProps)(DeckInfo);