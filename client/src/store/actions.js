export const ADD_LOCATION = 'ADD_LOCATION'
export const SET_LOCATIONS = 'SET_LOCATIONS'
export const SET_LOCATION_FORM = 'SET_LOCATION_FORM'

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

export const setLocationForm = (location) => {
  return {
    type: SET_LOCATION_FORM,
    payload: location
  }
}
