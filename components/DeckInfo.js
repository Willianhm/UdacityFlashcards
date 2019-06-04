import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import DeckDetail from './DeckDetail';
import Button from './Button' ;

class DeckInfo extends Component{
    static navigationOptions = () => {
        return {
            headerMode: 'none'
        }
    }

    addCard = () => {
        this.props.navigation.navigate(
            'NewCard',
            { deckId: this.props.deck.title }
        );
    }

    startQuiz = () => {

    }

    render(){
        const { deck } = this.props;
        return (
            <View>
                <DeckDetail item={deck}/>
                <Button 
                    title="Add Card"
                    onPress={this.addCard}
                    block
                    />
                <Button 
                    title="Start Quiz"
                    onPress={this.startQuiz}
                    block
                    />
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