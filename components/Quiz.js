import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { borderColor, red, green, textSecondaryColor } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import Button from './Button';

class Quiz extends Component{
    static navigationOptions = ({ navigation }) => {
        const {state} = navigation;
        return {
          title: `${state.params.title}`,
        };
    };
    
    state = {
        indexCard: 0,
        countCorrects: 0,
        showAnswer: false,
        ended: false,
        fadeAnim: new Animated.Value(0)
    };

    showAnswer = (e) => {
        this.setState({ showAnswer: !this.state.showAnswer, fadeAnim: new Animated.Value(0) });
    }

    answer = (correct) => {
        if(correct){
            this.setState((state) => ({ countCorrects: state.countCorrects + 1 }));
        }
        this.getNextCard();
    }

    getNextCard = () => {
        const indexCard = this.state.indexCard + 1;
        const { cards } = this.props;
        if(cards[indexCard]){
            this.setState({ indexCard, showAnswer: false, fadeAnim: new Animated.Value(0) });
        }else{
            this.setState({ ended: true });
            clearLocalNotification()
                .then(setLocalNotification);
        }
    }
    
    backToDeck = () => {
        this.props.navigation.pop();
    }

    restartQuiz = () => {
        this.setState({
            indexCard: 0,
            countCorrects: 0,
            showAnswer: false,
            ended: false,
        });
    }

    componentDidUpdate(props, newState){
        if(newState.showAnswer !== this.state.showAnswer){
            Animated.sequence([
                Animated.timing(this.state.fadeAnim, { duration: 1000, toValue: 1, useNativeDriver: true})
              ]).start()
        }
    }

    render(){
        const { ended, indexCard, showAnswer, countCorrects } = this.state;
        if(ended){
            return (
                <View style={styles.containerFinished}>
                    <Text style={styles.text}>Finished!</Text>
                    <Text style={styles.textFinished}>You're right {countCorrects} of {this.props.cards.length} questions.</Text>
                    <Button 
                        title="Restart Quiz"
                        onPress={this.restartQuiz}
                        customStyle={styles.buttonFinished}
                        outline
                        />
                    <Button 
                        title="Back to Deck"
                        onPress={this.backToDeck}
                        customStyle={styles.buttonFinished}
                        />
                </View>
            );
        }
        const { question, answer } = this.props.cards[indexCard];
        return (
            <View style={styles.container}>
                <View style={styles.numberCards}>
                    <Text>{indexCard + 1} / {this.props.cards.length} </Text>
                </View>
                <Animated.View
                    style={[styles.card, {transform: [
                        {rotateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: showAnswer ? ['360deg', '0deg'] : ['0deg', '360deg']
                          })
                        }
                      ]}]}>
                    
                    {!showAnswer  
                        ? (
                            <View>
                                <Text style={styles.text}>{question}</Text>
                                <Text style={styles.showAnswer} onPress={this.showAnswer}>Answer</Text>
                            </View>
                        )
                        : (
                            <Text style={[styles.text]}>{answer}</Text>
                        )
                    }
                </Animated.View>
                <View
                    style={styles.actions}>
                    <Button 
                        title="Correct"
                        customStyle={styles.buttonCorrect}
                        onPress={() => this.answer(true)}
                        disabled={!showAnswer}
                        />
                    <Button 
                        title="Incorrect"
                        customStyle={styles.buttonIncorrect}
                        onPress={() => this.answer(false)}
                        disabled={!showAnswer}
                        />
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ deck }, { navigation }) => {
    const { deckId } = navigation.state.params;
    return {
        cards: deck.filter(d => d.id === deckId)[0].cards
    }
}

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
    containerFinished: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 20
    },
    textFinished: {
        fontSize: 16, 
        color: textSecondaryColor, 
        textAlign: 'center'
    },
    buttonFinished: {
        marginTop: 10
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    numberCards: {
        flex: 1,
        paddingLeft: 20
    },
    card: {
        flex: 9,
        borderWidth: 1,
        borderColor: borderColor,
        borderRadius: 2,
        justifyContent: 'center'
    },  
    text: {
        fontSize: 20,
        fontSize: 30,
        textAlign: 'center'
    },
    showAnswer: {
        color: red ,
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center'
    },
    actions: {
        flex: 4,
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonCorrect: {
        marginTop: 10,
        backgroundColor: green,
        borderColor: green
    },
    buttonIncorrect: {
        marginTop: 10,
        backgroundColor: red,
        borderColor: red
    } 
});