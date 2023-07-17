import axios from "axios";

const createActionName = actionName => `app/fixtures/${actionName}`;

const ADD_FIXTURES = createActionName('ADD_FIXTURES');

const addFixtures = payload => ({ type: ADD_FIXTURES, payload });

export const fetchFixtures = (id, year) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/fixtures',
      params: {
        season: year,
        league: '1',
        team: id
      },
      headers: {
        'X-RapidAPI-Key': 'f7d8d8ceccmshe0ff352a34b3d37p1f3913jsn2dd77db35e1a',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };
    

    try {
      const response = await axios.request(options);
      dispatch(addFixtures(response.data.response))
    } catch (error) {
      //console.error(error);
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