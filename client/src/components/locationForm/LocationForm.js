import { useEffect, useState } from 'react'
import { useFetch } from 'use-http'
import { useDispatch, useSelector } from 'react-redux'
import { setLocationForm } from '../../store/actions'
import { loadLocations, saveLocation } from '../../store/reducers'

const TextInput = ({
  label,
  name,
  placeHolder = '',
  value = '',
  onChange = () => {}
}) => {

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label htmlFor={ name } className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          { label }
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
          id={ name }
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
          placeholder={ placeHolder }
        />
      </div>
    </div>
  )
}

const OptionsInput = ({
  label,
  name,
  defaultValue = '',
  value = '',
  onChange = () => {},
  options = []
}) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label htmlFor={ name } className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          { label }
        </label>
      </div>
      <div className="md:w-2/3 relative">
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id={ name }
            onChange={ onChange }
          >
            <option value="" selected disabled hidden></option>
            { options && options.map((category, i) => {
              return <option key={ i } value={ category.id }>{ category.name } </option>
            }) }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

      </div>
    </div>
  )
}

const SubmitButton = ({
  label,
  onClick = () => {}
}) => {
  return (
    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button className="shadow bg-skyblue-500 hover:bg-skyblue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={ onClick }>
          { label }
        </button>
      </div>
    </div>
  )
}

const LocationForm = () => {

  const [categories, setCategories] = useState([])

  const locations = useSelector((state) => state.locations)
  const dispatch = useDispatch()
  const [location, setLocation] = useState({})

  const {
    loading: categoriesLoading,
    error: categoriesError,
    get: categoriesGet
  } = useFetch('http://localhost:4000/categories')

  useEffect(async () => {
    const response = await categoriesGet('/')
    if (!categoriesError) {
      setCategories(response.data)
    }
  }, [])

  useEffect(async () => {
    dispatch(loadLocations())
  }, [])

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
        name="category_id"
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