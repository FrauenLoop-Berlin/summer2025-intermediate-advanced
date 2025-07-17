import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import Todo from '@/models/Todo'
import validator from 'validator'
import { v4 as uuidv4 } from 'uuid'

// GET /api/database - gets all todos in the database 
export async function GET() {
  await dbConnect()
  const todos = await Todo.find().sort({ createdAt: -1 })
  return NextResponse.json(todos)
}

// POST /api/database - create a new entry in the data base for a todo
export async function POST(req) {
  // data  in the body of the request - see readme
  const { task, status } = await req.json()

  // Validate and sanitize
  if (!validator.isLength(task || '', { min: 1, max: 100 })) {
    return NextResponse.json({ error: 'Task must be between 1–100 characters' }, { status: 400 })
  }

  if (status && !['open', 'done'].includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  await dbConnect()

  const newTodo = new Todo({
    id: uuidv4(),
    task: validator.escape(task),
    status: status || 'open',
  })

  try {
    const saved = await newTodo.save()
    return NextResponse.json(saved, { status: 201 })
  } catch (err) {
    console.log(err);
    
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
