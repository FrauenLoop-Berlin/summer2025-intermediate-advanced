import Link from "next/link";
import TodoList from '@/app/todos/page'
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the home page</p>
      <h2>Examples</h2>
      <nav className="flex">
      <Link href="/users/" className="m-2">Users - clientside component </Link>

      <Link href="/serversideComponentWithFetch/" className="m-2"> Users - serverside component</Link>
      <Link href="/todos" className="m-2">To do list with database</Link>
      </nav>
      
    </div>
  )
}