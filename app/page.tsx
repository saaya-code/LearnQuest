import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const featuredCourses = [
    { id: 1, title: "Introduction to Flutter", description: "Learn the basics of Flutter development" },
    { id: 2, title: "Advanced Android with Kotlin", description: "Master Android development using Kotlin" },
    { id: 3, title: "Google Cloud Fundamentals", description: "Get started with Google Cloud Platform" },
  ]

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to GDG E-Learning Platform</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Enhance your skills with our curated courses for Google Developer Group members
        </p>
        <Button asChild size="lg">
          <Link href="/courses">Explore Courses</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/courses/${course.id}`}>View Course</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

