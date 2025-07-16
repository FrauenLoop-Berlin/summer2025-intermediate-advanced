
// Example 7: Using in App Router with Server Component
// File: app/users/page.js
async function getRandomUsers() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=10', {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export default async function UsersPage() {
  const users = await getRandomUsers()
  
  return (
    <div>
      <h1>Random Users</h1>
      <h2>This component is built serverside, requests data once and does not contain any user interaction - use a client side component if you need user interactions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <div key={index} className="border p-4 rounded">
            <img src={user.picture.medium} alt="User" className="rounded-full" />
            <h3>{user.name.first} {user.name.last}</h3>
            <p>{user.email}</p>
            <p>{user.location.city}, {user.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  )
}