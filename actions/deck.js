export const RECEIVE_DECK = 'RECEIVE_DECK';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

import { _getDecks, _saveDeck, _addCard } from '../utils/_deck';

export function getDecks(){
    return (dispatch) => {
        return _getDecks().then((decks) => {
            dispatch({
                decks,
                type: RECEIVE_DECK
            });
        });
    }
}

export function addDeck(title){
    return (dispatch) => {
        return _saveDeck(title).then((deck) => {
            dispatch({
                deck,
                type: ADD_DECK
            });
            return deck.id;
        });
    }
}

export function addCard(card){
    return (dispatch) => {
        return _addCard(card).then((card) => {
            dispatch({
                card,
                type: ADD_CARD
            });
        })
    }
}