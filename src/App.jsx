import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>

    </div>
  )
}

export default App