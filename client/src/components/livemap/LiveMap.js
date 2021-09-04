import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const styles = {
  width: '100vw',
  position: 'absolute'
}

const LiveMap = () => {

  const [map, setMap] = useState(null);
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

  let toggleAddingLocation = () => {}
  let isAddingLocation = false

  return (
    <div className="container h-64 md:h-full relative">
      <div className="w-full h-full rounded" ref={el => (mapContainer.current = el)} style={styles} />
      <div className="absolute right-0 top-0 mx-8 mh-8">
        <button
          className='button overMap'
          onClick={toggleAddingLocation} >
          {isAddingLocation ? 'Close Form' :'Add Location'}
        </button>
      </div>
    </div>
  )
}

export default LiveMap
