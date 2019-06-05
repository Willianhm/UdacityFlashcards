import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';


class Quiz extends Component{
    state = {
        indexCard: 0,
        countCorrects: 0,
        showAnswer: false,
        ended: false
    };

    showAnswer = () => {

    }

    answer = (correct) => {
        if(correct){
            this.setState((state) => ({ countCorrects: state.countCorrects++ }));
        }
    }

    getNextCard = () => {
        const indexCard = this.state.indexCard + 1;
        const { cards } = this.props;
        if(cards[indexCard]){
            this.setState({ indexCard, showAnswer: false });
        }else{
            this.setState({ ended: true });
        }
    }

    render(){
        const { ended, indexCard } = this.state;
        if(ended){
            return (
                <View>Fim</View>
            );
        }
        const { question, answer } = this.props.cards[indexCard];
        return (
            <View>Quiz</View>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
    const { deckId } = navigation.state.params;
    const deck = deck.filter(d => d.id === deckId)[0];
    return {
        cards: deck.cards,
        deckTitle: deck.title
    }
}

export default connect(mapStateToProps)(Quiz);