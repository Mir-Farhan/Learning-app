import { Header } from "@/components/header";
import { EnhancedCourseCard } from "@/components/enhanced-course-card";
import { getAllCourses } from "@/lib/courses";

export default function Home() {
  const courses = getAllCourses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl -z-10"></div>
          <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Study Materials
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Browse our collection of courses and start learning today
            </p>
          </div>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <EnhancedCourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
