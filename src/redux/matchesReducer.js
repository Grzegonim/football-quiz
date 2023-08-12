import axios from "axios";

const createActionName = actionName => `app/matches/${actionName}`;

const ADD_LEAGUE = createActionName('ADD_LEAGUE');

const addMatches = payload => ({ type: ADD_LEAGUE, payload });

export const fetchLeague = () => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      params: {id: '1'},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
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
      url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      params: {id: '1', season: {year}},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
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