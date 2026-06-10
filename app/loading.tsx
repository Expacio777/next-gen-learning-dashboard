export default function Loading() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-40 rounded-3xl bg-zinc-800" />

        <div className="grid grid-cols-3 gap-4">
          <div className="h-52 rounded-3xl bg-zinc-800" />
          <div className="h-52 rounded-3xl bg-zinc-800" />
          <div className="h-52 rounded-3xl bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}