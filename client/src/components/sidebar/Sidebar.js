import logo from '../logo/logo.svg'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const locations = useSelector(state => state.locations)
  const setCurrentLocation = (location) => {
    console.log('Current location:', location)
  }

  return (
    <div className="w-64 absolute sm:relative bg-skyblue-400 shadow md:h-full flex-col justify-between flex px-2">
      <div className="h-24 pt-8 w-full flex items-center">
        <img src={logo} className="App-logo md:items-center" alt="Skycatch" />
      </div>
      <div className="h-10 mb-auto flex-grow mt-12 px-4">
        <div className="mt-4">
          <div className="flex w-full justify-between text-white-300 hover:text-white-500 cursor-pointer items-center mb-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg  ml-2">Locations</span>
            </div>
            <div className="px-3 bg-white-700 rounded text-white-500 flex items-center justify-center text-xs align-text-bottom">
              { locations.length }
            </div>
          </div>
          <ul className="mt-2 text-sm">
            { locations.map((location) => {
              return (
                <li className="block w-full text-left py-2 px-2 hover:bg-skyblue-600 hover:text-white cursor-pointer"
                  onClick={ () => { setCurrentLocation(location.id) } }
                  key={ location.id }
                >
                  { location.name }
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
      <div className="flex justify-center my-8 w-full">
          <div className="relative ">
              <div className="text-white-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={10} cy={10} r={7} />
                      <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
              </div>
              <input className=" bg-white-700 focus:outline-none rounded w-full text-sm text-white-500 bg-white-100 pl-10 py-2" type="text" placeholder="Search" />
          </div>
      </div>
    </div>
  )
}

export default Sidebar