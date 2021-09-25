import { useEffect, useState } from 'react'
import { useFetch } from 'use-http'

const LocationForm = () => {

  const [categories, setCategories] = useState([])

  const {
    loading: categoriesLoading,
    error: categoriesError,
    get: categoriesGet
  } = useFetch('http://localhost:4000/categories')

  useEffect(async () => {
    const response = await categoriesGet('/')
    if (!categoriesError) {
      // setCategories([
      //   {name: 'A', id: 'a'},
      //   {name: 'B', id: 'b'}
      // ])
      setCategories(response.data)
    }
  }, [])

  return (
    <form className="location-form max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="location_name" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Location Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="location_name"
            type="text" />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="category" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Category
          </label>
        </div>
        <div className="md:w-2/3 relative">
          <div className="relative">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              { categories && categories.map((category, i) => {
                return <option key={ i } value={category.id}>{ category.name } </option>
              }) }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

        </div>
      </div>


      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="latitude" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Latitude
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="latitude"
            type="text" />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="longitude" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Longitude
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="longitude"
            type="text" />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="open_hour" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Open Hour
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="open_hour"
            type="text" />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label htmlFor="close_hour" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Close Hour
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="close_hour"
            type="text" />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-skyblue-500 hover:bg-skyblue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Submit
          </button>
        </div>
      </div>
    </form>
  )

}

export default LocationForm