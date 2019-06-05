import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons'

import { white, primaryColor } from '../utils/colors';
import Decks from './Decks';
import NewDeck from './NewDeck';
import DeckInfo from './DeckInfo';
import AddCard from './AddCard';
import Quiz from './Quiz';

const Tabs = createBottomTabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
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
    Home:       Tabs,
    DeckInfo:   DeckInfo,
    AddCard:    AddCard,
    Quiz:       Quiz
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'transparent'
        }
    }
});


export default createAppContainer(MainNavigator);