import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import LiveMap from './components/livemap/LiveMap'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'
import './App.tailwind.css'

const App = function () {
  return (
    <div className="App flex flex-no-wrap h-screen">
      <React.StrictMode>
        <Provider store={ store }>
          <Sidebar />
          <LiveMap />
        </Provider>
      </React.StrictMode>
    </div>
  )
}

export default App
