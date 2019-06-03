import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons'

import { white, purple, primaryColor } from '../utils/colors';
import Deck from './Deck';
import NewDeck from './NewDeck';
import DeckInfo from './DeckInfo';

const Tabs = createBottomTabNavigator({
    Deck: {
        screen: Deck,
        navigationOptions: {
            tabBarLabel: 'Deck',
            tabBarIcon: ({ tintColor }) => <Entypo name='list' size={25} color={tintColor} />
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={25} color={tintColor} />
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: primaryColor,
        style: {
            backgroundColor: white,
        },
        labelStyle: {
            color: '#8E8E8E'
        }
    }
});

const MainNavigator = createStackNavigator({
    Home: Tabs,
    DeckInfo: DeckInfo 
}, {
    headerMode: 'screen'
});


export default createAppContainer(MainNavigator);