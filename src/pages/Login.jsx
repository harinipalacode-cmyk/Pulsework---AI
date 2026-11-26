import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h1 className="text-2xl font-bold text-orange-600 text-center mb-2">
          Emergency Fuel Delivery
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Login to your account
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-2 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border p-2 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account? <span className="text-orange-600 cursor-pointer">Register</span>
        </p>

      </div>

    </div>
  )
}

export default Login