import {
  ADD_LOCATION, SET_LOCATIONS, SET_LOCATION_FORM,
  addLocation, setLocations
} from "./actions";

const initialState = {
  locations: [],
  locationForm: {}
}

export const locationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_LOCATION: {
      return { ...state, locations: [...state.locations, action.payload] }
    }
    case SET_LOCATIONS: {
      return { ...state, locations: action.payload }
    }
    case SET_LOCATION_FORM: {
      return { ...state, locationForm: action.payload }
    }
    default: {
      return state;
    }
  }
}

export const saveLocation = () => async (dispatch, getState) => {
  const locationForm = getState().locationForm
  const location = await fetch('http://localhost:4000/locations', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(locationForm)
  })
    .then(res => res.json())
    .then(res => res.data)

  dispatch(addLocation(location))
}

export const loadLocations = () => async (dispatch, getState) => {
  const locations = await fetch('http://localhost:4000/locations')
    .then(res => res.json())
    .then(res => res.data)
  dispatch(setLocations(locations))
}
