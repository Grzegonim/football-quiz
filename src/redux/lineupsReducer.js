import axios from "axios";

const createActionName = actionName => `app/lineups/${actionName}`;

const ADD_LINEUPS = createActionName('ADD_LINEUPS');

const addLineups = payload => ({ type: ADD_LINEUPS, payload });

export const fetchLineups = (id) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/lineups',
      params: {fixture: id },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    
    
    try {
      const response = await axios.request(options);
      dispatch(addLineups(response.data.response))
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