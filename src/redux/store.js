import { applyMiddleware, compose, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialstate';
import matchesReducer from './matchesReducer';
import teamsReducer from './teamsReducer';
import fixturesReducer from './fixturesReducer';
import fixtureReducer from './fixtureReducer';
import lineupsReducer from './lineupsReducer';


const reducer = combineReducers({
  leagues: matchesReducer,
  teams: teamsReducer, 
  fixtures: fixturesReducer, 
  fixture: fixtureReducer, 
  lineups: lineupsReducer
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