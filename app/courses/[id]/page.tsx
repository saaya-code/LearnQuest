import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoursePage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the course data based on the ID
  const course = {
    id: params.id,
    title: "Introduction to Flutter",
    description: "Learn the basics of Flutter development",
    modules: [
      { id: 1, title: "Getting Started with Flutter" },
      { id: 2, title: "Building Your First Flutter App" },
      { id: 3, title: "State Management in Flutter" },
    ],
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-xl text-muted-foreground">{course.description}</p>

      <Card>
        <CardHeader>
          <CardTitle>Course Modules</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {course.modules.map((module) => (
              <li key={module.id} className="flex items-center">
                <span className="mr-2">📚</span>
                {module.title}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Enroll in Course</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

