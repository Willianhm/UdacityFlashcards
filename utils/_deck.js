import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'UdaciFlashCards:deck';

export function _getDecks(){
    // AsyncStorage.removeItem(DECK_STORAGE_KEY);
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((result) => {
        return result ? JSON.parse(result) : [];
    });
}

export function _saveDeck(title){
    return _getDecks().then((decks) => {
        const deck = {
            id: decks.length,
            title,
            created: new Date().getTime(),
            cards: []
        };
        decks.push(deck);
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
        return deck;

    });
}

export function _addCard(card){
    return _getDecks().then((decks) => {
        card.id = card.created = new Date().getTime();
        decks[card.deckId].cards.push(card);
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
        return card;
    })
}