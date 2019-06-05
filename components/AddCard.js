import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

import { addCard } from '../actions/deck';

import { textPrimaryColor, borderColor } from '../utils/colors';
import Button from './Button';

class AddCard extends Component{
    state = {
        question: '',
        answer: ''
    };

    save = () => {
        const { question, answer } = this.state;
        const { deckId, addCard } = this.props;
        addCard({
            deckId,
            question, 
            answer
        });
    }

    render(){
        const { question, answer } = this.state;
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>Question:</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        value={question}
                        onChangeText={text => this.setState({ question: text })}
                        />
                </View>
                <Text style={styles.title}>Answer:</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        value={answer}
                        onChangeText={text => this.setState({ answer: text })}
                        />
                </View>
                <View style={styles.inputContainer}>
                    <Button 
                        title="Add"
                        block
                        onPress={this.save}
                        />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
    const { deckId } = navigation.state.params;
    return {
        deckId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCard: (card) => dispatch(addCard(card))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: textPrimaryColor
    },
    inputContainer: {
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: borderColor,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 35,
        marginRight: 35
    },
    button: {
        flex: 1,
        fontSize: 12
    }
});