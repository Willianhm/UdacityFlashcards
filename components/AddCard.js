import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

class AddCard extends Component{
    render(){
        return(
            <View>
                <Text>Add AddCard</Text>
            </View>
        )
    }
}

export default connect()(AddCard);