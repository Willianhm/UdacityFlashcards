import { RECEIVE_DECK, ADD_DECK, ADD_CARD } from '../actions/deck';

function deck(state = [], action) {
  switch (action.type) {
    case RECEIVE_DECK:
      return [
        ...action.decks
      ]
    case ADD_DECK:
      return [
        ...state,
        { ...action.deck }
      ]
    case ADD_CARD:
      const { card } = action;
      return state.map((deck) => {
        if (deck.id === card.deckId) {
          deck.cards.push(card);
        }
        return deck;
      })
    default:
      return state
  }
}

export default deck;