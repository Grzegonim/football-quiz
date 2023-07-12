import axios from "axios";

const createActionName = actionName => `app/teams/${actionName}`;

const ADD_TEAMS = createActionName('ADD_TEAMS');

const addTeams = payload => ({ type: ADD_TEAMS, payload });

export const fetchTeams = () => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/standings',
      params: {
        season: '2022',
        league: '1'
      },
      headers: {
        'X-RapidAPI-Key': 'f7d8d8ceccmshe0ff352a34b3d37p1f3913jsn2dd77db35e1a',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      dispatch(addTeams(response.data.response))
      console.log(response.data);
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