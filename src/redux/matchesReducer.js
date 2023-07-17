import axios from "axios";

const createActionName = actionName => `app/matches/${actionName}`;

const ADD_LEAGUE = createActionName('ADD_LEAGUE');

const addMatches = payload => ({ type: ADD_LEAGUE, payload });

export const fetchLeague = () => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/leagues',
      params: {id: '1'},
      headers: {
        'X-RapidAPI-Key': 'f7d8d8ceccmshe0ff352a34b3d37p1f3913jsn2dd77db35e1a',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      dispatch(addMatches(response.data.response))
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export const fetchSeason = (year) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/leagues',
      params: {id: '1', season: {year}},
      headers: {
        'X-RapidAPI-Key': 'f7d8d8ceccmshe0ff352a34b3d37p1f3913jsn2dd77db35e1a',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      dispatch(addMatches(response.data.response))
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}


const matchesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LEAGUE:
      return action.payload;
    default: 
      return statePart;
  }
}

export default matchesReducer;