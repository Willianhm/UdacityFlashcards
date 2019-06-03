import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'UdaciFlashCards:deck';

export function _getDecks(){
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((result) => {
        return result ? JSON.parse(result) : [];
    });
}

export function _saveDeck(title){
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((result) => {
        const dummyData = result ? JSON.parse(result) : [];
        const deck = {
            title,
            countCards: 0,
            created: new Date().getTime()
        };
        dummyData.push(deck);
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData));
        return deck;
    });
}