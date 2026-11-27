import React from 'react'

const MyRequests = () => {
  const requests = [
    { id: 1, fuel: 'Petrol', quantity: 10, status: 'Approved' },
    { id: 2, fuel: 'Diesel', quantity: 20, status: 'Waiting' },
    { id: 3, fuel: 'Petrol', quantity: 15, status: 'Rejected' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Requests</h1>

      <div className="bg-white p-5 rounded shadow">
        {requests.map((request) => (
          <div key={request.id} className="border p-4 rounded mb-3">
            <p><b>Request ID:</b> {request.id}</p>
            <p><b>Fuel Type:</b> {request.fuel}</p>
            <p><b>Quantity:</b> {request.quantity} Litres</p>
            <p><b>Status:</b> {request.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyRequests
