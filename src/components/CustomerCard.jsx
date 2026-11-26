import React, { useState, useEffect } from 'react'

const CustomerCard = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Customer count:", count)
  }, [count])

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-bold text-blue-600">Customer</h2>

      <p className="mt-2">Customers can request fuel and track their delivery.</p>

      <h3 className="font-semibold mt-3">Available Services</h3>
      <ul className="list-disc pl-5">
        <li>Request Petrol</li>
        <li>Request Diesel</li>
        <li>Track Fuel Delivery</li>
        <li>View Order Status</li>
      </ul>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Request Fuel
      </button>

      <p className="mt-3 font-semibold">Total Customer Requests: {count}</p>
    </div>
  )
}

export default CustomerCard