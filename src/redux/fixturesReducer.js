import axios from "axios";

const createActionName = actionName => `app/fixtures/${actionName}`;

const ADD_FIXTURES = createActionName('ADD_FIXTURES');

const addFixtures = payload => ({ type: ADD_FIXTURES, payload });

export const fetchFixtures = (id, year, league) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
      params: {
        season: year,
        league: league,
        team: id
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    

    try {
      const response = await axios.request(options);
      dispatch(addFixtures(response.data.response))
    } catch (error) {
      console.error(error);
    }
  }
}

const fixturesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_FIXTURES:
      return action.payload;
    default: 
      return statePart;
  }
}

export default fixturesReducer;