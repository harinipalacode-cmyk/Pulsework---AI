import React from 'react'

const ManagerCard = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-2">
        Manager
      </h2>

      <p className="text-gray-600 mb-3">
        Monitor and manage the fuel delivery system.
      </p>

      <h3 className="font-semibold">Management Activities</h3>

      <ul className="text-gray-500 mt-2 space-y-1">
        <li>• Manage Customers</li>
        <li>• Manage Suppliers</li>
        <li>• Monitor Fuel Orders</li>
        <li>• View Reports</li>
      </ul>

      <button className="bg-orange-600 text-white px-4 py-2 rounded mt-4 hover:bg-orange-700">
        Manage System
      </button>
    </div>
  )
}

export default ManagerCard