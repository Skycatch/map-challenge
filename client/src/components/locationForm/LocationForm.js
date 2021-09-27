import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocationForm } from '../../store/actions'
import { saveLocation } from '../../store/reducers'
import { TextInput } from './TextInput'
import { OptionsInput } from './OptionsInput'
import { SubmitButton } from './SubmitButton'

const LocationForm = () => {

  const dispatch = useDispatch()
  const [location, setLocation] = useState({})

  const categories = useSelector(state => state.categories)

  const saveLocationForm = () => {
    dispatch(setLocationForm(location))
    dispatch(saveLocation())
  }

  const onInputChange = (event) => {
    console.log(event.target.name, event.target.value)
    setLocation({
      ...location,
      [event.target.id]: event.target.value
    })
    console.log('location changed:', location)
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
        value={ location.category_id }
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
        name="open_time"
        onChange={ onInputChange }
        value={ location.open_time } />

      <TextInput
        label="Close Hour"
        name="close_time"
        onChange={ onInputChange }
        value={ location.close_time } />

      <SubmitButton
        label="Submit"
        onClick={ saveLocationForm } />

    </form>
  )

}

export default LocationForm