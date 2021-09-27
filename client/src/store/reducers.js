import {
  ADD_LOCATION, SET_LOCATIONS, SET_LOCATION_FORM, SET_CURRENT_LOCATION,
  addLocation, setLocations, setCurrentLocation, setCategories, SET_CATEGORIES
} from "./actions";

const initialState = {
  locations: [],
  locationForm: {},
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
    case SET_LOCATION_FORM: {
      return { ...state, locationForm: action.payload }
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
