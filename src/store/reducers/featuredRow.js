const initialState = {
  items: [],
};

export default function livretAccueil(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_BASKET': {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      const newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn('Trying to remove item not in basket');
      }

      return {
        ...state,
        items: newBasket,
      };
    }
    default:
      return state;
  }
}

export const addToBasket = (items) => (dispatch) => {
  dispatch({ type: 'ADD_TO_BASKET', payload: items });
};

export const removeFromBasket = (items) => (dispatch) => {
  dispatch({ type: 'REMOVE_FROM_BASKET', payload: items });
};

export const selectBasketItemsWithId = (state, id) => (
  state.featuredRow.items.filter((item) => item.id === id)
);
