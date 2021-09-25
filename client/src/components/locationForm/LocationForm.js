
const LocationForm = () => {

  return (
    <form className="location-form max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label htmlFor="location_name" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Location Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="location_name"
            type="text" />
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label htmlFor="latitude" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Latitude
          </label>
        </div>
        <div class="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="latitude"
            type="text" />
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label htmlFor="longitude" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Longitude
          </label>
        </div>
        <div class="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="longitude"
            type="text" />
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label htmlFor="open_hour" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Open Hour
          </label>
        </div>
        <div class="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="open_hour"
            type="text" />
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label htmlFor="close_hour" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Close Hour
          </label>
        </div>
        <div class="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-skyblue-500"
            id="close_hour"
            type="text" />
        </div>
      </div>



      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-skyblue-500 hover:bg-skyblue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Submit
          </button>
        </div>
      </div>
    </form>
  )

}

export default LocationForm