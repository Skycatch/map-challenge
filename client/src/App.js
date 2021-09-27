import React, { useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import LiveMap from './components/livemap/LiveMap'
import { useDispatch } from 'react-redux'
import './App.css'
import './App.tailwind.css'
import { loadLocations } from './store/reducers'

const App = function () {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadLocations())
  }, [])

  return (
    <div className="App flex flex-no-wrap h-screen">
      <React.StrictMode>
        <Sidebar />
        <LiveMap />
      </React.StrictMode>
    </div>
  )
}

export default App
