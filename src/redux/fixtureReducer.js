import axios from "axios";
import { fetchLineups } from "./lineupsReducer";

const createActionName = actionName => `app/fixture/${actionName}`;

const ADD_FIXTURE = createActionName('ADD_FIXTURE');

const addFixture = payload => ({ type: ADD_FIXTURE, payload });

export const fetchFixture = (id) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/fixtures',
      params: {id: id},
      headers: {
        'X-RapidAPI-Key': 'f7d8d8ceccmshe0ff352a34b3d37p1f3913jsn2dd77db35e1a',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      dispatch(addFixture(response.data.response))
      dispatch(fetchLineups(id))
    } catch (error) {
      //console.error(error);
    }
  }
}

const fixtureReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_FIXTURE:
      return action.payload;
    default: 
      return statePart;
  }
}

export default fixtureReducer;