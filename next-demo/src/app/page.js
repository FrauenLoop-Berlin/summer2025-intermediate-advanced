import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the home page</p>
      <nav className="flex bg-pink-500">
      <Link href="/users/">Users - clientside component</Link>
      <Link href="/serversideComponentWithFetch/">Users - serverside component</Link>
      </nav>
    </div>
  )
}