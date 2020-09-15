import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import TrackOrderReducer from './reducers/TrackOrderReducer';

const Reducers = combineReducers({
	TrackOrder: TrackOrderReducer,
});

const Store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

export default Store;
