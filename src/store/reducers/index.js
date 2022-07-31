// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import basketSlice from './basketSlice';
import restaurantSlice from './restaurantSlice';

const rootReducer = combineReducers({
  basketSlice,
  restaurantSlice,
});

// Exports
export default rootReducer;
