import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import CustomerCard from './components/CustomerCard'
import SupplierCard from './components/SupplierCard'
import ManagerCard from './components/ManagerCard'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
        <Footer/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-6">
          <CustomerCard />
          <SupplierCard />
          <ManagerCard />
      </div>  
    </div>
  )
}

export default App