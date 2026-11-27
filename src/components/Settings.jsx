import React, { useState, useEffect } from 'react'

const Settings = () => {
  const [name, setName] = useState('User')
  const [email, setEmail] = useState('user@gmail.com')
  const [notifications, setNotifications] = useState(true)

  useEffect(() => {
    console.log('Settings updated')
  }, [name, email, notifications])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded shadow max-w-lg">
        <label className="block mb-2 font-semibold">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>

        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5">
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default Settings
