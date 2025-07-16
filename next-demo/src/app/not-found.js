import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back home</Link>
    </div>
  )
}