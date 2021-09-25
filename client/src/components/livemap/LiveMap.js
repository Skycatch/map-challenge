import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import LocationForm from '../locationForm/LocationForm'

const styles = {
  width: '100vw',
  position: 'absolute'
}

const LiveMap = () => {

  const [map, setMap] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false)
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [0, 0],
        zoom: 5
      });

      map.on('load', () => {
        setMap(map)
        map.resize()
      })
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [map])

  return (
    <div className="container h-64 md:h-full relative">
      <div className="w-full h-full rounded" ref={ el => (mapContainer.current = el) } style={ styles } />
      <div className="absolute right-0 top-8 mx-8 mh-8">
        <button
          className='button overMap float-right bg-white-200 hover:bg-blue-500 text-skyblue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          onClick={ () => { setFormOpen(!isFormOpen) } } >
          { isFormOpen ? 'Close Form' :'Add Location' }
        </button>
        { isFormOpen && (
          <div className="clear-both right-0 bg-white text-blue-700 font-semibold hover:text-white py-2 px-4 rounded shadow-md text-sm px-8 py-8">
            <LocationForm />
          </div>
        )}
      </div>
    </div>
  )
}

export default LiveMap
