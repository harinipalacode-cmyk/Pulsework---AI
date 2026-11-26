import React, { useState, useEffect } from 'react'

const SupplierCard = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Supplier count:", count)
  }, [count])

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-bold text-green-600">Supplier</h2>

      <p className="mt-2">Suppliers can manage and deliver fuel orders.</p>

      <h3 className="font-semibold mt-3">Supplier Activities</h3>
      <ul className="list-disc pl-5">
        <li>View Fuel Requests</li>
        <li>Accept Orders</li>
        <li>Update Delivery Status</li>
        <li>Manage Fuel Availability</li>
      </ul>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        View Orders
      </button>

      <p className="mt-3 font-semibold">Total Supplier Orders: {count}</p>
    </div>
  )
}

export default SupplierCard