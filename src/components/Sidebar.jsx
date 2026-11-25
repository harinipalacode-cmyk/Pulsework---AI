import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-60 min-h-screen p-5">
      <h2 className="text-lg font-bold mb-6">Menu</h2>

      <ul className="space-y-4">
        <li className="hover:text-orange-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-orange-400 cursor-pointer">Fuel Orders</li>
        <li className="hover:text-orange-400 cursor-pointer">My Requests</li>
        <li className="hover:text-orange-400 cursor-pointer">Track Delivery</li>
        <li className="hover:text-orange-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  )
}

export default Sidebar