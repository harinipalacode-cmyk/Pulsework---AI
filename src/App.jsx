import React, { useState } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import FuelOrders from './components/FuelOrders'
import MyRequests from './components/MyRequests'
import TrackDelivery from './components/TrackDelivery'
import Settings from './components/Settings'
import Footer from './components/Footer'

import Home from './components/HomePage'
import CustomerPage from './components/CustomerPage'
import SupplierPage from './components/SupplierPage'
import ManagerPage from './components/ManagerPage'

const App = () => {

  const [page, setPage] = useState('Home')

  const [customers, setCustomers] = useState([])
  const [suppliers, setSuppliers] = useState([])

  const showPage = () => {

    if (page === 'Dashboard') return <Dashboard />
    if (page === 'Fuel Orders') return <FuelOrders />
    if (page === 'My Requests') return <MyRequests />
    if (page === 'Track Delivery') return <TrackDelivery />
    if (page === 'Settings') return <Settings />

    if (page === 'Home') return <Home setPage={setPage} />

    if (page === 'Customer') {
      return (
        <CustomerPage
          onSubmitData={(data) => setCustomers((current) => [...current, data])}
        />
      )
    }

    if (page === 'Supplier') {
      return (
        <SupplierPage
          onSubmitData={(data) => setSuppliers((current) => [...current, data])}
        />
      )
    }

    if (page === 'Manager') {
      return (
        <ManagerPage
          customers={customers}
          suppliers={suppliers}
        />
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar setPage={setPage} />

      <div className="flex">

        <Sidebar setPage={setPage} />

        <div className="flex-1 min-h-screen">
          {showPage()}
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default App
