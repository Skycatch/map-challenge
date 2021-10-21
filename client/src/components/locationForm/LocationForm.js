import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveLocation } from '../../store/reducers'
import { TextInput } from './TextInput'
import { OptionsInput } from './OptionsInput'
import { SubmitButton } from './SubmitButton'
import React from 'react'

const LocationForm = () => {

  const dispatch = useDispatch()
  const [location, setLocation] = useState({})

  const categories = useSelector(state => state.categories)

  const saveLocationForm = () => {
    dispatch(saveLocation(location))
  }

  const onInputChange = (event) => {
    setLocation({
      ...location,
      [event.target.id]: event.target.value
    })
  }

  return (
    <form className="location-form max-w-sm">

      <TextInput
        label="Location Name"
        name="name"
        onChange={ onInputChange }
        value={ location.name } />

      <OptionsInput
        label="Category"
        name="categoryId"
        onChange={ onInputChange }
        value={ location.categoryId }
        options={ categories } />

      <TextInput
        label="Latitude"
        name="latitude"
        onChange={ onInputChange }
        value={ location.latitude } />

      <TextInput
        label="Longitude"
        name="longitude"
        onChange={ onInputChange }
        value={ location.longitude } />

      <TextInput
        label="Open Hour"
        name="openTime"
        onChange={ onInputChange }
        value={ location.openTime } />

      <TextInput
        label="Close Hour"
        name="close_time"
        onChange={ onInputChange }
        value={ location.closeTime } />

      <SubmitButton
        label="Submit"
        onClick={ saveLocationForm } />

    </form>
  )

}

export default LocationForm