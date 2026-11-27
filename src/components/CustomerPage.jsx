import React, { useState, useEffect } from 'react'
import { z } from 'zod'

const customerSchema = z.object({
  name: z.string().min(3, "Name must contain 3 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must contain at least 10 digits"),
  fuel: z.string().min(1, "Select fuel"),
  quantity: z.coerce.number().positive("Enter a valid quantity"),
  address: z.string().min(5, "Enter your address")
})

const CustomerPage = ({ onSubmitData }) => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    fuel: '',
    quantity: '',
    address: ''
  })

  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    console.log("Customer form changed")
  }, [form])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const result = customerSchema.safeParse(form)

    if (!result.success) {
      const newErrors = {}

      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message
      })

      setErrors(newErrors)
      setMessage('')
    } else {
      setErrors({})
      setMessage('Customer details submitted successfully!')

      console.log(result.data)

      // Send customer details to App.jsx
      onSubmitData(result.data)

      setForm({
        name: '',
        email: '',
        phone: '',
        fuel: '',
        quantity: '',
        address: ''
      })
    }
  }

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">

        <h1 className="text-2xl font-bold text-blue-600 mb-5">
          Customer Fuel Request
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Customer Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}

          <select
            name="fuel"
            value={form.fuel}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Fuel</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
          </select>
          {errors.fuel && <p className="text-red-500">{errors.fuel}</p>}

          <input
            name="quantity"
            type="number"
            placeholder="Quantity in Litres"
            value={form.quantity}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.quantity && <p className="text-red-500">{errors.quantity}</p>}

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Submit Request
          </button>

          {message && <p className="text-green-600">{message}</p>}

        </form>
      </div>
    </div>
  )
}

export default CustomerPage
