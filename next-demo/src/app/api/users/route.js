import { NextResponse } from 'next/server'

// Example 2: Using in a Next.js API route (Server-side)
// File: app/api/users/route.js
export async function GET() {
  try {
    console.log('In GET');
    
    const response = await fetch('https://randomuser.me/api/')
    console.log(response);
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Random User API')
    }
    
    const data = await response.json()
    console.log(data);
    
    // NextResponse is an extension of the Response from Web Fetch API
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    )
  }
}