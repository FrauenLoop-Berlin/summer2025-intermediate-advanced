'use client'

import { useState, useEffect } from 'react'
import validator from 'validator'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  const [status, setStatus] = useState('open')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [validationError, setValidationError] = useState(null)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const res = await fetch('/api/todos')
      const data = await res.json()
      setTodos(data)
    } catch (err) {
      setError('Failed to load todos')
    }
  }

  const validateForm = () => {
    if (validator.isEmpty(task.trim())) {
      return 'Task cannot be empty.'
    }

    if (!validator.isLength(task, { min: 3, max: 100 })) {
      return 'Task must be between 3 and 100 characters.'
    }

    if (!['open', 'done'].includes(status)) {
      return 'Status must be open or done.'
    }

    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setValidationError(null)

    const validationMsg = validateForm()
    if (validationMsg) {
      setValidationError(validationMsg)
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, status }),
      })

      if (!res.ok) {
        const { error } = await res.json()
        throw new Error(error || 'Something went wrong')
      }

      setTask('')
      setStatus('open')
      fetchTodos()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What do you need to do?"
          className={`w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
            validationError ? 'border-red-500 ring-red-300' : 'focus:ring-blue-400'
          }`}
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="open">Open</option>
          <option value="done">Done</option>
        </select>

        {validationError && (
          <p className="text-red-600 text-sm">{validationError}</p>
        )}
        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? 'Adding...' : 'Add Todo'}
        </button>
      </form>

      <ul className="divide-y divide-gray-200">
        {todos.length === 0 ? (
          <li className="text-gray-500">No todos yet.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id || todo._id} className="py-2 flex justify-between items-center">
              <span className="text-gray-800">{todo.task}</span>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  todo.status === 'done'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {todo.status}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
