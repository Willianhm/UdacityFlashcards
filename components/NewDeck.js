import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

import { addDeck } from '../actions/deck';

import { textPrimaryColor, borderColor } from '../utils/colors';
import Button from './Button';

class NewDeck extends Component{
    state = {
        title: ''
    }

    save = () => {
        const { title } = this.state;
        this.props.addDeck(title);
        this.setState(({ title: '' }));
    }

    render(){
        const { title } = this.state;
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        value={title}
                        onChangeText={text => this.setState({ title: text })}
                        />
                </View>
                <View style={styles.inputContainer}>
                    <Button 
                        title="Save"
                        block
                        onPress={this.save}
                        />
                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 35,
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