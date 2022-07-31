const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    shortDescription: null,
    dishes: null,
  },
};

export default function restaurantSlice(state = initialState, action) {
  switch (action.type) {
    case 'SET_RESTAURANT':
      return {
        ...state,
        restaurant: action.payload,
      };
    default:
      return state;
  }
}

export const setRestaurant = (items) => (dispatch) => {
  dispatch({ type: 'SET_RESTAURANT', payload: items });
};

export const selectRestaurant = (state) => state.restaurantSlice.restaurant;
