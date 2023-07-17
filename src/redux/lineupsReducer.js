import axios from "axios";

const createActionName = actionName => `app/lineups/${actionName}`;

const ADD_LINEUPS = createActionName('ADD_LINEUPS');

const addLineups = payload => ({ type: ADD_LINEUPS, payload });

export const fetchLineups = (id) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/fixtures/lineups',
      params: {fixture: id },
      headers: {
        'X-RapidAPI-Key': 'f7d8d8ceccmshe0ff352a34b3d37p1f3913jsn2dd77db35e1a',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };
    
    
    try {
      const response = await axios.request(options);
      dispatch(addLineups(response.data.response))
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

const lineupsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LINEUPS:
      return action.payload;
    default: 
      return statePart;
  }
}

export default lineupsReducer;