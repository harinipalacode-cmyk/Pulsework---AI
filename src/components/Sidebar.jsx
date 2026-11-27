import React from 'react'

const Sidebar = ({ setPage }) => {
  const menuItems = [
    'Dashboard',
    'Fuel Orders',
    'My Requests',
    'Track Delivery',
    'Manager',
    'Settings'
  ]

  return (
    <div className="bg-slate-800 text-white w-64 min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Menu</h2>

      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => setPage(item)}
          className="block w-full text-left py-3 px-2 hover:bg-slate-700 rounded"
        >
          {item}
        </button>
      ))}
    </div>
    )
}

export default Sidebar
