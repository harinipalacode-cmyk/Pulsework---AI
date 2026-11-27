import React from 'react'

const FuelOrders = () => {
  const orders = [
    { id: 1, fuel: 'Petrol', quantity: 20, status: 'Pending' },
    { id: 2, fuel: 'Diesel', quantity: 30, status: 'Delivered' },
    { id: 3, fuel: 'Petrol', quantity: 15, status: 'Pending' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Fuel Orders</h1>

      <div className="bg-white p-5 rounded shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">Order ID</th>
              <th className="p-3">Fuel Type</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.fuel}</td>
                <td className="p-3">{order.quantity} Litres</td>
                <td className="p-3">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FuelOrders
