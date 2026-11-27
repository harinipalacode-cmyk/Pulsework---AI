import React from 'react'

const ManagerPage = ({ customers = [], suppliers = [] }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>

      {/* Customer Details */}
      <div className="bg-white p-5 rounded shadow mb-6">
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          Customer Details ({customers.length})
        </h2>

        {customers.length === 0 ? (
          <p>No customer forms submitted yet.</p>
        ) : (
          customers.map((customer, index) => (
            <div key={`${customer.email || 'customer'}-${index}`} className="border rounded p-4 mb-3">
              <p><b>Name:</b> {customer.name}</p>
              <p><b>Email:</b> {customer.email}</p>
              <p><b>Phone:</b> {customer.phone}</p>
              <p><b>Fuel:</b> {customer.fuel}</p>
              <p><b>Quantity:</b> {customer.quantity} Litres</p>
              <p><b>Address:</b> {customer.address}</p>
            </div>
          ))
        )}
      </div>

      {/* Supplier Details */}
      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-xl font-bold text-green-600 mb-4">
          Supplier Details ({suppliers.length})
        </h2>

        {suppliers.length === 0 ? (
          <p>No supplier forms submitted yet.</p>
        ) : (
          suppliers.map((supplier, index) => (
            <div key={`${supplier.email || 'supplier'}-${index}`} className="border rounded p-4 mb-3">
              <p><b>Name:</b> {supplier.name}</p>
              <p><b>Email:</b> {supplier.email}</p>
              <p><b>Phone:</b> {supplier.phone}</p>
              <p><b>Fuel:</b> {supplier.fuel}</p>
              <p><b>Quantity:</b> {supplier.quantity} Litres</p>
              <p><b>Location:</b> {supplier.location}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ManagerPage
