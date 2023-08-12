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
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
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