import React from 'react'

const Navbar = ({ setPage }) => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center flex-wrap">

      <h1 className="text-2xl font-bold text-orange-600">
        Emergency Fuel Delivery
      </h1>

      <div className="flex gap-4">
        <button onClick={() => setPage('Home')} className="hover:text-orange-600">
          Home
        </button>

        <button onClick={() => setPage('Customer')} className="hover:text-orange-600">
          Customer
        </button>

        <button onClick={() => setPage('Supplier')} className="hover:text-orange-600">
          Supplier
        </button>

        <button onClick={() => setPage('Manager')} className="hover:text-orange-600">
          Manager
        </button>
      </div>

    </div>
  )
}

export default Navbar
