import Sidebar from './components/sidebar/Sidebar'
import LiveMap from './components/livemap/LiveMap'
import './App.css'
import './App.tailwind.css'

const App = function () {
  return (
    <div className="App flex flex-no-wrap h-screen">
      <Sidebar />
      <LiveMap />
    </div>
  )
}

export default App
