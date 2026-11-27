import React from 'react'

const TrackDelivery = () => {
  const deliveries = [
    { id: 101, fuel: 'Petrol', location: 'Pollachi', status: 'On the Way' },
    { id: 102, fuel: 'Diesel', location: 'Coimbatore', status: 'Delivered' },
    { id: 103, fuel: 'Petrol', location: 'Tiruppur', status: 'Preparing' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Track Delivery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="bg-white p-5 rounded shadow">
            <h2 className="text-xl font-semibold">Delivery #{delivery.id}</h2>
            <p className="mt-2">Fuel: {delivery.fuel}</p>
            <p>Location: {delivery.location}</p>
            <p className="mt-2 font-semibold text-blue-600">
              Status: {delivery.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrackDelivery
