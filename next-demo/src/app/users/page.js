// Example 1: Using fetch in a React component (Client-side)
'use client'
import { useState, useEffect } from 'react'

export default function RandomUserComponent() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchRandomUser = async () => {
    try {
      setLoading(true)
      // Route your request to the resuests in api
      const response = await fetch('/api/users')
      
      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }
      
      const data = await response.json()
      setUser(data.results[0])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
// call function when page loads client side
  useEffect(() => {
    fetchRandomUser()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>No user data</div>

  return (
    <div>
      <h2>Random User</h2>
      <h2>This component is built client side, here you can use React Hooks for user interactions (buttons, forms....)</h2>
      <img src={user.picture.large} alt="User avatar" />
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <button onClick={fetchRandomUser}>Get New User</button>
    </div>
  )
}
