import React from 'react'

const HomePage = ({ setPage }) => {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-3">
        Welcome to Emergency Fuel Delivery
      </h1>

      <p className="text-gray-600 mb-6">
        A simple system to request fuel and manage fuel supply.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-bold text-blue-600">Customers</h2>
          <p className="mt-2">Request petrol or diesel for your needs.</p>

          <button
            onClick={() => setPage('Customer')}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Customer Form
          </button>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-bold text-green-600">Suppliers</h2>
          <p className="mt-2">Provide fuel and manage fuel availability.</p>

          <button
            onClick={() => setPage('Supplier')}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Supplier Form
          </button>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-bold text-orange-600">Delivery</h2>
          <p className="mt-2">Keep track of fuel orders and delivery status.</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-bold text-purple-600">Manager</h2>
          <p className="mt-2">Review customer requests and supplier details.</p>

          <button
            onClick={() => setPage('Manager')}
            className="bg-purple-600 text-white px-4 py-2 rounded mt-4"
          >
            Manager Dashboard
          </button>
        </div>

      </div>

    </div>
  )
}

export default HomePage
