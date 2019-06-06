import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

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
        const { deckId, addCard, navigation } = this.props;
        addCard({
            deckId,
            question, 
            answer
        }).then(() => {
            navigation.pop();
        });
    }

    render(){
        const { question, answer } = this.state;
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>Question:</Text>
                <TextInput 
                    style={styles.input}
                    value={question}
                    onChangeText={text => this.setState({ question: text })}
                    />
                <Text style={styles.title}>Answer:</Text>
                <TextInput 
                    style={styles.input}
                    value={answer}
                    onChangeText={text => this.setState({ answer: text })}
                    />
                <Button 
                    title="Add"
                    block
                    onPress={this.save}
                    />
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
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: textPrimaryColor
    },
    input: {
        borderBottomWidth: 1,
        borderColor: borderColor,
        marginTop: 20,
        marginBottom: 20
    }
});