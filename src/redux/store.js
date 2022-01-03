import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import FavReducer from './FavDucks';
import StarReducer from './StarDucks';

const rootReducer = combineReducers({
    planets : StarReducer,
    favorites:FavReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store
}