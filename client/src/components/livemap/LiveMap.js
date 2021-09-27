import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl, { Marker, Popup } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import LocationForm from '../locationForm/LocationForm'
import { useSelector } from 'react-redux'

const styles = {
  width: '100vw',
  position: 'absolute'
}

const LocationInfo = ({ location, category }) => {

  return (
    <div className="bg-white text-gray-800 py-2 px-2 text-sm text-left w-52">
      <h2 className="text-lg mb-2 pb-2 border-b-2 font-bold">{ location.name }</h2>
      <div className="font-bold">{ category.name }</div>
      <div>Opens: { location.open_time }</div>
      <div>Closes: { location.close_time }</div>
    </div>
  )
}

const LiveMap = () => {

  const [map, setMap] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false)
  const mapContainer = useRef(null);

  const locations = useSelector(state => state.locations)
  const categories = useSelector(state => state.categories)
  const currentLocation = useSelector(state => state.currentLocation)

  const [markers, setMarkers] = useState({})
  const [popups, setPopups] = useState({})

  useEffect(() => {
    if (map && currentLocation) {
      for(const popupId of Object.keys(popups)) {
        console.log({ popups, popupId, pp: popups[popupId] })
        console.log('PPPP', popups[popupId])
        if (popupId === currentLocation) {
          popups[popupId].addTo(map)
        }
        else {
          popups[popupId].remove()
        }
      }
      const location = locations.find(location => location.id === currentLocation)
      map.flyTo({ center: [location.longitude, location.latitude] })
    }
  }, [currentLocation, map])

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const center = locations.length ?
        [locations[0].longitude, locations[0].latitude] :
        [0, 0]

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        zoom: 12,
        center
      });

      map.on('load', () => {
        setMap(map)
        map.resize()
      })
    }

    if (!map) initializeMap({ setMap, mapContainer })
    if (map) {
      const markers = {}
      const popups = {}
      locations.forEach((location) => {
        const category = categories.find(cat => cat.id === location.categoryId)
        const marker = new Marker()
          .setLngLat([location.longitude, location.latitude])
          .addTo(map)
        markers[location.id] = marker
        const placeholder = document.createElement('div')
        ReactDOM.render(
          <LocationInfo location={ location } category={ category } />,
          placeholder
        )
        const popup = new Popup({
          closeButton: false,
          closeOnClick: true,
          anchor: 'bottom-left',
          open: false
        })
        .setLngLat([ location.longitude, location.latitude ])
        .setDOMContent(placeholder)
        popups[location.id] = popup
        marker.setPopup(popup)
      })
      setMarkers(markers)
      setPopups(popups)
    }
  }, [map, locations])

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
          <div className="clear-both right-0 bg-white text-blue-700 font-semibold hover:text-white rounded shadow-md text-sm px-8 py-8">
            <LocationForm />
          </div>
        )}
      </div>
    </div>
  )
}

export default LiveMap
