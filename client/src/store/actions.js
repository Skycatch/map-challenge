export const ADD_LOCATION = 'ADD_LOCATION'
export const SET_LOCATIONS = 'SET_LOCATIONS'

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