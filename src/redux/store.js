import { applyMiddleware, compose, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialstate';
import matchesReducer from './matchesReducer';
import teamsReducer from './teamsReducer';


const reducer = combineReducers({
  leagues: matchesReducer,
  teams: teamsReducer
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