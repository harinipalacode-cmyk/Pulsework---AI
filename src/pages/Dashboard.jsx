import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Welcome to Emergency Fuel Delivery System
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Total Orders</h2>
          <h1 className="text-2xl font-bold">25</h1>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Pending Orders</h2>
          <h1 className="text-2xl font-bold text-orange-500">8</h1>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Delivered</h2>
          <h1 className="text-2xl font-bold text-green-600">17</h1>
        </div>

      </div>
    </div>
  )
}

export default Dashboard