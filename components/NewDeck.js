import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native';

import { addDeck } from '../actions/deck';

import { textPrimaryColor, borderColor } from '../utils/colors';
import Button from './Button';

class NewDeck extends Component{
    state = {
        title: ''
    };

    save = () => {
        const { title } = this.state;
        if(!title){
            Alert.alert('Title is required', 'You need to describe a title for the deck.', [{ text: 'Close' }]);
        }else{
            const { addDeck, navigation } = this.props; 
            this.setState(({ title: '' }));
            addDeck(title).then((id) => {
                navigation.navigate(
                    'DeckInfo',
                    { deckId: id }
                );
            });
        }   
    }

    render(){
        const { title } = this.state;
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput 
                    autoFocus
                    style={styles.input}
                    value={title}
                    onChangeText={text => this.setState({ title: text })}
                    />
                <Button 
                    title="Save"
                    onPress={this.save}
                    />
            </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDeck: (title) => dispatch(addDeck(title))
    }
}

export default connect(null, mapDispatchToProps)(NewDeck);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: textPrimaryColor
    },
    input: {
        borderBottomWidth: 1,
        borderColor: borderColor,
        marginTop: 20,
        marginBottom: 10
    }
});