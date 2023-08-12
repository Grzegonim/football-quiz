import axios from "axios";

const createActionName = actionName => `app/teams/${actionName}`;

const ADD_TEAMS = createActionName('ADD_TEAMS');

const addTeams = payload => ({ type: ADD_TEAMS, payload });

export const fetchTeams = (year, id) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
      params: {
        league: id,
        season: year
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      dispatch(addTeams(response.data.response));
    } catch (error) {
      console.error(error);
    }
  }
}

const teamsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TEAMS:
      return action.payload;
    default: 
      return statePart;
  }
}

export default teamsReducer;