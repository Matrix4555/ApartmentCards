import { ADD_CARD, LIKE } from "./types";

const initialState = {
    cards: []
}

export const cardReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_CARD:
            const id = state.cards.length + 1;
            const newCard = action.payload;
            newCard.id = id;
            return { cards: state.cards.concat(newCard) };

        case LIKE:
            const index = action.payload;
            const copy = state.cards.slice();
            copy[index].like = !copy[index].like;
            return { cards: copy };

        default:
            return state;

    }
}
