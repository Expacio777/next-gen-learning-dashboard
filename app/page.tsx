import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import Sidebar from "../components/Sidebar";
import { getCourses } from "../lib/getCourses";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto flex max-w-7xl gap-6">
        <Sidebar />

        <div className="flex-1">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <HeroTile />
            </div>

            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  progress={course.progress}
                  iconName={course.icon_name}
                />
              ))
            ) : (
              <div className="rounded-3xl bg-zinc-900 p-8 text-center lg:col-span-2">
                <h3 className="mb-2 text-xl font-semibold">
                  No courses found
                </h3>

                <p className="text-zinc-400">
                  Add some courses in Supabase.
                </p>
              </div>
            )}

            <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Activity
              </h3>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, index) => {
                  const levels = [
                    "bg-zinc-800",
                    "bg-indigo-900",
                    "bg-indigo-700",
                    "bg-indigo-500",
                  ];

                  const level =
                    levels[Math.floor(Math.random() * levels.length)];

                  return (
                    <div
                      key={index}
                      className={`h-4 w-4 rounded ${level}`}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}