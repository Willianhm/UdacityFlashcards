import { RECEIVE_DECK, ADD_DECK } from '../actions/deck';

function deck (state = [], action) {
  switch (action.type) {
    case RECEIVE_DECK :
      return [
        ...action.decks
      ]
    case ADD_DECK :
      return [
        ...state,
        { ...action.deck }
      ]
    default :
      return state
  }
}

export default deck;