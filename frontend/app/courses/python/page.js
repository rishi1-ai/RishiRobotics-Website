import CourseCard from "@/components/CourseCard";

const pythonCourses = [
  {
    slug: "python-basics",
    title: "Python Basics",
    description: "Learn the fundamentals of Python including variables, data types, loops, and functions.",
    difficulty_level: "Beginner",
    icon: "Code2",
    color: "#3B82F6",
  },
  {
    slug: "intermediate-python",
    title: "Intermediate Python",
    description: "Learn file handling, exception handling, modules, and object-oriented programming.",
    difficulty_level: "Intermediate",
    icon: "Cpu",
    color: "#10B981",
  },
  {
    slug: "advanced-python",
    title: "Advanced Python",
    description: "Explore advanced Python concepts like decorators, generators, multithreading and packages.",
    difficulty_level: "Advanced",
    icon: "Brain",
    color: "#8B5CF6",
  },
];

export default function PythonCoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Python Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pythonCourses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}