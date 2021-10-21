import {
  ADD_LOCATION, SET_LOCATIONS, SET_CURRENT_LOCATION,
  addLocation, setLocations, setCategories, SET_CATEGORIES
} from "./actions";

const initialState = {
  locations: [],
  currentLocation: null,
  categories: []
}

export const locationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_LOCATION: {
      return { ...state, locations: [...state.locations, action.payload] }
    }
    case SET_LOCATIONS: {
      return { ...state, locations: action.payload }
    }
    case SET_CURRENT_LOCATION: {
      return { ...state, currentLocation: action.payload }
    }
    case SET_CATEGORIES: {
      return { ...state, categories: action.payload }
    }
    default: {
      return state;
    }
  }
}

export const saveLocation = (locationData) => async (dispatch, getState) => {
  const location = await fetch('http://localhost:4000/locations', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(locationData)
  })
    .then(res => res.json())
    .then(res => res.data)

  dispatch(addLocation(location))
}

export const loadCategories = () => async (dispatch, getState) => {
  const categories = await fetch('http://localhost:4000/categories')
    .then(res => res.json())
    .then(res => res.data)
  dispatch(setCategories(categories))
}

export const loadLocations = () => async (dispatch, getState) => {
  const locations = await fetch('http://localhost:4000/locations')
    .then(res => res.json())
    .then(res => res.data)

  dispatch(setLocations(locations))
}
