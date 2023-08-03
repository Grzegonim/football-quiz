import axios from "axios";

const createActionName = actionName => `app/seasons/${actionName}`;

const ADD_SEASONS = createActionName('ADD_SEASONS');

const addSeasons = payload => ({ type: ADD_SEASONS, payload });

export const fetchSeasons = (league, country) => {
  return async (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      params: {
        name: league,
        country: country
      },
      headers: {
        'X-RapidAPI-Key': 'f7d8d8ceccmshe0ff352a34b3d37p1f3913jsn2dd77db35e1a',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      dispatch(addSeasons(response.data.response))
    } catch (error) {
      console.error(error);
    }
  }
}

const seasonsReducer = (statePart = {}, action) => {
  switch (action.type) {
    case ADD_SEASONS:
      return action.payload;
    default: 
      return statePart;
  }
}

export default seasonsReducer;