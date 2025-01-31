import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link href="/courses" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Courses
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <div className="ml-auto flex items-center space-x-4">
        <Button variant="ghost">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  )
}

