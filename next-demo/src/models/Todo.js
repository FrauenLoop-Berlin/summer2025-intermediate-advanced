import { Schema, models, model } from 'mongoose'

const TodoSchema = new Schema({
  id: { type: String, required: true, unique: true }, // UUID

  task: { type: String, required: true },
  status: { type: String, enum: ['open', 'done'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
})

export default models.Todo || model('Todo', TodoSchema)
