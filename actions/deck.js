export const RECEIVE_DECK = 'RECEIVE_DECK';
export const ADD_DECK = 'ADD_DECK';

import { _getDecks, _saveDeck } from '../utils/_deck';


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
        });
    }
}