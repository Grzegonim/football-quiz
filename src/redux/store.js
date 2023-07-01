import { applyMiddleware, compose, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialstate';
import matchesReducer from './matchesReducer';


const reducer = combineReducers({
  leagues: matchesReducer,
});

const store = createStore(
  reducer, 
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;