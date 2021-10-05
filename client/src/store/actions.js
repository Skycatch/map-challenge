export const ADD_LOCATION = 'ADD_LOCATION'
export const SET_LOCATIONS = 'SET_LOCATIONS'
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'
export const SET_CATEGORIES = 'SET_CATEGORIES'

export const addLocation = (location) => {
  return {
    type: ADD_LOCATION,
    payload: location
  }
}

export const setLocations = (locations) => {
  return {
    type: SET_LOCATIONS,
    payload: locations
  }
}

export const setCurrentLocation = (location) => {
  return {
    type: SET_CURRENT_LOCATION,
    payload: location
  }
}

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories
  }
}