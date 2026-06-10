export default function HeroTile() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 min-h-[220px] flex flex-col justify-between">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold tracking-tight">
          Welcome back, Student
        </h2>

        <p className="mt-3 text-zinc-400">
          Keep the momentum going today.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-3">
        <div className="rounded-full bg-indigo-500/20 px-4 py-2 text-sm text-indigo-300">
          🔥 7 Day Streak
        </div>

        <div className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
          📚 4 Active Courses
        </div>

        <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300">
          ⏱ 2h 14m Learned Today
        </div>
      </div>
    </section>
  );
}