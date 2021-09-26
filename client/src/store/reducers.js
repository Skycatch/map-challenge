import { ADD_LOCATION, SET_LOCATIONS, setLocations } from "./actions";

const initialState = {
  locations: []
}

export const locationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_LOCATION: {
      return { ...state, locations: [...state.locations, action.payload] }
    }
    case SET_LOCATIONS: {
      return { ...state, locations: action.payload }
    }
    default: {
      return state;
    }
  }
}

export const saveLocation = () => async (dispatch, getState) => {
  const location = getState().location
  await fetch('http://localhost:4000/locations', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(location)
  })
  console.log('Saved!')
  // Some dispatch here
}

export const loadLocations = () => async (dispatch, getState) => {
  const locations = await fetch('http://localhost:4000/locations').then(res => res.json())
  dispatch(setLocations(locations))
}
