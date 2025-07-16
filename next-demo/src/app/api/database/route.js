import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('In GET to DB');
    
    const client = await clientPromise
    console.log(client);
    
    const db = client.db('todolist')
    console.log(db);
    
    const todos = await db.collection('todos').find({}).toArray()
    
    return NextResponse.json(todos)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 })
  }
}